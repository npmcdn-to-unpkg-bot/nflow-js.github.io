d3.select(window)
  .on('scroll.sidemenu', updateSideMenu)
nflow = nFlow
function updateSideMenu(){
  var d3Body = d3.select('body')
  var d3Header = d3Body.select('.page-header')
  var headerHeight = parseInt(d3Header.style('height'))
  d3Body.classed('has-sidemenu', document.body.scrollTop>=headerHeight)
}

function initTree(e, name, selection){
  var f = nFlow.create(name || 'flow').parent(null)
  
  var tree =  nflowVis.Vis()
    .call(nflowVis.Tree)
    .emit('track', f)
    .emit('dragging', false)
    .emit('dom', d3.select(e).node())
    .emit('select', selection)
  
  return f
}
