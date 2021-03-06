// == SECTION The Basics

// See test/test_basic.ts for the source!

print( Template.div("Hello") )
// => <div>Hello</div>


print( Template.div({}, "Hello") )
// => <div>Hello</div>


print( Template.div({ id:"main" }, "Hello") )
// => <div id="main">Hello</div>


print( Template.my_view() )
// => <div id="my_view" class="my-view">My View</div>



// == SECTION Nested Calls 

print( Template.nested() )
// => <section class="parent"><div class="nested"><p>test</p></div></section>


print( Template.nested('hello') )
// => <section class="parent"><div class="nested"><p>hello</p></div></section>



// == SECTION Deeper Modules

print( Template.Deeper.hello() )
// => <section class="parent"><div class="nested"><p>from hello</p></div></section>


print( Template.Deeper.my_widget() )
// => <section class="widget"><p>widget content</p></section>


print( Template.Deeper.my_other_widget() )
// => <widget class="widget"><p>widget content</p></widget>



// == SECTION Disconnected Template Functions

var disconnected_widget = Template.Deeper.my_other_widget;

print( disconnected_widget() )
// => <widget class="widget"><p>widget content</p></widget>



// == SECTION Helpers

print( Template.image('test.gif') )
// => <img src="test.gif"/>

print( Template.image('test.gif', { cls:'avatar' }) )
// => <img class="avatar" src="test.gif"/>

print( Template.stylesheet('test.css') )
// => <link src="test.css" rel="stylesheet" type="text/css"/>



// == SECTION Nested Attributes

print( Template.div({ data:{ focus:true, name:"test", enabled:false } }, "Test") )
// => <div data-focus="true" data-name="test" data-enabled="false">Test</div>

print( Template.div({ data:{ focus:true, user:{ name:'test' } } }, "Test") )
// => <div data-focus="true" data-user-name="test">Test</div>


// == SECTION Class
var view= new Template.MyView()
print( view.render() )
// => <div class="my-view"><p>MyView</p></div>