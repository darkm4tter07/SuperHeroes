/**
 * props:
 * - items: array of hero objects (as in API)
 * - highlightIndex: number
 * - onHoverIndex(index)
 * - onSelect(item)
 */


export default function SuggestionsList({ 
  items = [], 
  highlightIndex = -1, 
  onHoverIndex = () => {}, 
  onSelect = () => {} 
}) {
  if (!items || items.length === 0) {
    return (
      <div className="p-3 text-sm text-slate-400">No results</div>
    );
  }

  // Use the superhero API's image endpoint directly - no CORS issues!
  const getImageUrl = (item) => {
    if (!item.id) {
      return `https://ui-avatars.com/api/?name=${encodeURIComponent(item.name || 'Hero')}&background=6366f1&color=fff&size=128&bold=true`;
    }
    
    // Use the /id/image endpoint from superhero API
    return `/api/${item.id}/image`;
  };

  const getFallbackUrl = (item) => {
    return `https://ui-avatars.com/api/?name=${encodeURIComponent(item.name || 'Hero')}&background=6366f1&color=fff&size=128&bold=true`;
  };

  return (
    <ul role="listbox" className="divide-y divide-slate-700 max-h-64 overflow-y-auto">
      {items.map((it, idx) => {
        const isActive = idx === highlightIndex;
        const imageUrl = getImageUrl(it);
        const fallbackUrl = getFallbackUrl(it);
        
        return (
          <li
            key={it.id ?? idx}
            role="option"
            aria-selected={isActive}
            onMouseEnter={() => onHoverIndex(idx)}
            onMouseDown={(e) => {
              e.preventDefault();
              onSelect(it);
            }}
            className={`flex items-center gap-3 px-3 py-2 cursor-pointer transition-colors ${
              isActive ? "bg-slate-700" : "hover:bg-slate-700/50"
            }`}
          >
            <div className="w-12 h-12 rounded-md bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center flex-shrink-0 overflow-hidden">
              <img
                src={imageUrl}
                alt={it.name || 'Hero'}
                loading="lazy"
                onError={(e) => {
                  if (e.currentTarget.src !== fallbackUrl) {
                    e.currentTarget.src = fallbackUrl;
                  }
                }}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium text-slate-100 truncate">
                {it.name}
              </div>
              <div className="text-xs text-slate-400 truncate">
                {it.biography?.["full-name"] || it.biography?.publisher || "Unknown"}
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}