import React, { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import useDebounce from "../../hooks/useDebounce.js";
import useCharacter from "../../hooks/useCharacter.js";
import SuggestionsList from "./SuggestionList.jsx";

export default function SearchBar({
  placeholder = "Search heroes...",
  initial = "",
  minLength = 2,
  delay = 300,
  maxSuggestions = 26,
  onSelect = () => {},
  onSubmit = () => {},
  searchUrlBuilder = (q) => `/api/search/${encodeURIComponent(q)}`
}) {
  const [query, setQuery] = useState(initial);
  const debounced = useDebounce(query, delay);
  const [open, setOpen] = useState(false);
  const [highlight, setHighlight] = useState(-1);
  const inputRef = useRef(null);
  const listRef = useRef(null);
  const navigate = useNavigate();

  // fetch suggestions only when debounced meets length threshold
  const url = debounced && debounced.length >= minLength ? searchUrlBuilder(debounced) : null;
  const { data, loading } = useCharacter(url, [url]);

  // Handle both direct array and results wrapper
  const suggestions = (() => {
    if (!data) return [];
    const results = data.results || data;
    if (!Array.isArray(results)) return [];
    return results.slice(0, maxSuggestions);
  })();

  useEffect(() => {
    if (suggestions.length > 0) setOpen(true);
    else setOpen(false);
    setHighlight(-1);
  }, [debounced, suggestions.length]);

  // click outside to close
  useEffect(() => {
    function onDocClick(e) {
      if (
        inputRef.current &&
        !inputRef.current.contains(e.target) &&
        listRef.current &&
        !listRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  const handleSelect = useCallback(
    (hero) => {
      setOpen(false);
      setQuery("");
      onSelect(hero);
    },
    [onSelect]
  );

  const handleSubmit = useCallback(
    (q) => {
      setOpen(false);
      onSubmit(q);
    },
    [onSubmit]
  );

  function onKeyDown(e) {
    if (!open) {
      if (e.key === "Enter") handleSubmit(query);
      return;
    }

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlight((h) => Math.min(h + 1, suggestions.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlight((h) => Math.max(h - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (highlight >= 0 && suggestions[highlight]) {
        handleSelect(suggestions[highlight]);
      } else {
        handleSubmit(query);
      }
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  }

  return (
    <div className="relative w-full max-w-lg" aria-expanded={open}>
      <input
        ref={inputRef}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
        className="w-full bg-slate-900 text-slate-100 placeholder-slate-500 px-3 py-2 rounded-md outline-none ring-0 focus:ring-2 focus:ring-violet-500"
        onFocus={() => { if (suggestions.length) setOpen(true); }}
        aria-autocomplete="list"
        aria-controls="search-suggestions"
      />

      {loading && (
        <div className="absolute right-2 top-2 text-sm text-slate-400">…</div>
      )}

      {open && (
        <div 
          ref={listRef} 
          id="search-suggestions" 
          className="absolute z-50 w-full mt-2 bg-slate-800 rounded-md shadow-lg overflow-hidden"
        >
          <SuggestionsList
            items={suggestions}
            highlightIndex={highlight}
            onHoverIndex={(i) => setHighlight(i)}
            onSelect={handleSelect}
          />
        </div>
      )}
    </div>
  );
}