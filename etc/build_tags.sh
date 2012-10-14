# can't use tag 'var' for obvious reasons...

module_name="Template"

full_tags="a abbr address area article aside audio b base bdi bdo blockquote body button canvas caption cite code col colgroup command data datalist dd del details dfn div dl dt em embed eventsource fieldset figcaption figure footer form h1 h2 h3 h4 h5 h6 head header hgroup html i iframe ins kbd keygen label legend li mark map menu meter nav noscript object ol optgroup option output p pre progress q ruby rp rt s samp script section select small source span strong style sub summary sup table tbody td textarea tfoot th thead time title tr track u ul video wbr"

short_tags="br hr img input link meta param"

# Build the .ts contents... (for src/template_tags.ts)

echo "module $module_name {

// Full Tags:"

for tag in $full_tags
do
echo "
  export function $tag(...children:any[]):string {
    children.unshift('$tag');
    return tag.apply(tag, children);
  }"
done

echo "
// Short Tags:"

for tag in $short_tags
do
echo "
  export function $tag(atts?:any):string {
    return shortTag('$tag', atts);
  }"
done


echo "
}
"