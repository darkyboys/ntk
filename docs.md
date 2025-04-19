# Ntk - Neutral ToolKit (Documentation)
This is the official **Documentation** for the **Ntk**, Which covers all the functions of the **Ntk Library**. 

## Topics Covered
 - What is Ntk & Why use Ntk
 - Configuration of Ntk
 - Widgets in Ntk
 - Widget System in Ntk
 - Ntk Core
 - Signals in Ntk
 - Signal Routes in Ntk
 - Ntk User-Defined Widgets
 - Ntk Built-in Widgets
 - Ntk Examples

## What is Ntk & Why use Ntk
Ntk stands for Neutral ToolKit which provides a very robust widget engine to work with, The Widget engine Ntk provides is very easy to use and follows the Ntk25 Standards, Ntk25 was heavily inspired by the design of [Gtk](https://gtk.org/) and still the entire Ntk follows the Ntk25 Standard in it's design. 

Using Ntk is very very benificial because Ntk's Widget System isn't just easy to use but also written in Pure Vanilla JavaScript in a very very optimised way, Also Ntk allows you to not just use built-in widgets but also define your own Ntk widgets and you can just define them once and use anywhere, Either as a JavaScript Library or a JavaScript Module. Also Ntk Widgets are directly benifited from Ntk's Widget System means a highly optimised and highly reusable widget can be created.

## Configuration of Ntk
**Ntk** Natively allows you to check the configuration of your current **Ntk Version** with the following variables.

 - NTK_VERSION / NTK_VER / NTK_V
 - NTK_MODEL
 - NTK_NAME
 - NTK_AUTHOR
 - NTK_CONTRIBUTERS
 - NTK_WIDGET
 - NTK_HTML
 - NTK_JNODE
 - NTK_HLWTK

 ### Explanation of these variables
 These are constant variables which contains the Ntk information of your current version.
  - **NTK_VERSION** This contains the current Ntk version you are using , **NTK_VER**, **NTK_V** are sub-declarations of **NTK_VERSION**.
  - **NTK_MODEL** This contains the model name of your **NTK_VERSION**.
  - **NTK_NAME** This contains the name of your Ntk Build.
  - **NTK_AUTHOR** This contains the author name of your Ntk Build.
  - **NTK_CONTRIBUTERS** This is an array of the names of all the contributors of Ntk.
  - **NTK_WIDGET** This is nothing but just contains the integer value for Ntk determine something as a widget.
  - **NTK_HTML** This is nothing but just contains the integer value for Ntk determine something as a html.
  - **NTK_JNODE** This is nothing but just contains the integer value for Ntk determine something as a JavaScript Node Element.
  - **NTK_HLWTK** This is nothing but just contains the integer value for Ntk determine something as a HLWTK Component.

*Always use these variables as flags to Ntk*

## Widgets in Ntk
**Widgets** Are nothing but **Special JavaScript Objects** that defines a structural Type for Ntk to manipulate. The entire Ntk Widget System uses these to manipulate.

### Internal Structure Of a Ntk Widget
A Ntk Widgets Looks like this

- Ntk Widget
|- pkg_config
|-- pkg
|-- pkg_name
|- nhlwtk (The hlwtk component)

*The pkg_config part contains the widget configuration, pkg_config.pkg is a unique 64 digit long numeric value defines the identity of a widget, pkg_config.pkg_name defines the global name of the widget.*💐
*The nhlwtk is nothing but the Ntk Managed HLWTK Component.*

Manipulating a widget yourself is not safe and can result inintended results. So Ntk provides a whole huge Widget System which implements these widgets safey and you can use them like this.


## Widget System in Ntk
Finally we are learning about widgets so we will be using the Ntk's widget system which is a set of functions to implement & manipulate widgets.

### ntk_widget_new (Pkg_name, Pkg_Track=true)
This functions creates a ntk widget and returns it.

**Parameters**
 - *Pkg_name* : This will set the pkg_config.pkg_name in the ntk widget.
 - *Pkg_Track*: This will tell the Ntk, Weather to track the widget or not.

**Example**
```javascript
let myWidget = ntk_widget_new ('MyWidget');
```

---

### ntkWidgetsTrackList
This is an array keeping the track of all the Ntk Widgets which ntk widget system can trace.

**Example**
```javascript
let myWidget = ntk_widget_new ('MyWidget');
console.log (ntkWidgetsTrackList[0]);
```

---

### ntk_widget_is_valid (Widget)
This functions checks if a widget is a valid Ntk Widget or not by checking it's internal structure, If it is valid then it will return true othervise false.

**Parameters**
 - *Widget* : The Widget which is needed to be checked

**Example**
```javascript
let myWidget = ntk_widget_new ('MyWidget');
if (ntk_widget_is_valid (myWidget))
    console.log ('The widget is valid!');
else
    console.log ('The widget is invalid');
```

---

### ntk_widget_set_content (Widget, Content)
This functions sets the content of a widget to the defined content, It can be html/css/js or just plain text.

**Parameters**
 - *Widget* : The Widget whose content will be set.
 - *Content* : The Content to be set.

**Example**
```javascript
let myWidget = ntk_widget_new ('MyWidget');
if (ntk_widget_is_valid (myWidget))
    ntk_widget_set_content (myWidget, "<b>Hello world!</b>");
else
    console.log ('The widget is invalid, Can not set content');
```

Set content has built-in error detection so you don't manually need to check for errors but remember , set content will straight up throw an error if widget is invalid.

---

### ntk_widget_get_content (Widget)
This functions gets and returns the content of a Ntk Widget.

**Parameters**
 - *Widget* : The Widget whose content will be get.

**Example**
```javascript
let myWidget = ntk_widget_new ('MyWidget');
console.log (ntk_widget_get_content (myWidget));
```

Get content has built-in error detection so you don't manually need to check for errors but remember , get content will straight up throw an error if widget is invalid.

---

### ntk_widget_add_content (Widget, Content)
This functions will add new content into a Ntk Widget.

**Parameters**
 - *Widget* : The Widget in-which new content will be added.
 - *Content* : The Content to be added.

**Example**
```javascript
let myWidget = ntk_widget_new ('MyWidget');
ntk_widget_add_content (myWidget, 'hello world');
```

Add Content uses set and get content internally so error detection is very robust.

---

### ntk_widget_get_pkg (Widget)
This functions gets and returns the `pkg_config.pkg` of a Ntk Widget. (The 64 digit long identifier)

**Parameters**
 - *Widget* : The Widget whose `pkg_config.pkg` will be get.

**Example**
```javascript
let myWidget = ntk_widget_new ('MyWidget');
console.log (ntk_widget_get_pkg (myWidget));
```

Get Pkg has built-in error detection machenism. So no need to worry for un-intented behaviours but also remember the error dection will catch invalid widgets and throw errors.

---

### ntk_widget_set_pkg (Widget, Pkg)
This functions sets the `pkg_config.pkg` of a Ntk Widget. (The 64 digit long identifier)

**Parameters**
 - *Widget* : The Widget whose `pkg_config.pkg` will be set.
 - *Pkg* : The pkg which will be set.

**Example**
```javascript
let myWidget = ntk_widget_new ('MyWidget');
ntk_widget_set_pkg (myWidget, ntk_pkg_new());
```

Set Pkg has built-in error detection machenism. So no need to worry for un-intented behaviours but also remember the error dection will catch invalid widgets and throw errors.

---

### ntk_widget_convert (Widget, Type)
This function converts the Ntk Widget into another type which could be one of these.
 - HTML Raw Elements (String).
 - JavaScript Node/DOM Elements.
 - HLWTK Components
 - Ntk Widget (Self).

**Parameters**
 - *Widget* : The Widget which will be converted.
 - *Type* : This will tell ntk about the target type of conversion (Please use the Ntk Flags to convey this information).

**Example**
```javascript
let myWidget = ntk_widget_new ('MyWidget');
let js = ntk_widget_convert (myWidget, NTK_JNODE);
document.body.appendChild (js);
```

Widget Convert has built-in error detection machenism. So no need to worry for un-intented behaviours but also remember the error dection will catch invalid widgets and throw errors.

---

### ntk_element_convert (Element, Type)
This function converts the Non Ntk Widget into a Ntk Widget type which could be one of these.
 - HTML Raw Elements (String).
 - JavaScript Node/DOM Elements.
 - HLWTK Components
 - Ntk Widget (Self).

**Parameters**
 - *Element* : The Element which will be converted.
 - *Type* : This will tell ntk about the type of Element (Please use the Ntk Flags to convey this information).

**Example**
```javascript
let myWidget = ntk_widget_new ('MyWidget');
let js = ntk_widget_convert (myWidget, NTK_JNODE);
let ntk = ntk_element_convert (js, NTK_JNODE);

```

Element Convert has built-in error detection machenism. So no need to worry for un-intented behaviours but also remember the error dection will catch invalid widgets and throw errors.

---

### ntk_widget_render (Widget, Path)
This function renders a Ntk Widget to a path, The path could either be another Ntk Widget or a JavaScript Node/DOM Element. This function will auto detect the type and render accordingly.

**Parameters**
 - *Widget* : The Widget which will be rendered.
 - *Path* : The path where the widget will be rendered

**Example**
```javascript
let myWidget = ntk_widget_new ('MyWidget');
ntk_widget_render (myWidget, document.body);
```

*Don't call render again! It won't render a widget once rendered*

Widget Render has built-in type detection but remember if you parse raw html or hlwtk component then it will try to treat it as a javascript node element so it may cause un-intended behaviours.

---

### ntk_widget_destroy (Widget)
This function will destroy a rendered ntk widget only. 

**Parameters**
 - *Widget* : The Widget which will be destroyed.

**Example**
```javascript
let myWidget = ntk_widget_new ('MyWidget');
ntk_widget_render (myWidget, document.body);
ntk_widget_destroy(myWidget);
```

Widget Destroy has built-in error detection machenism. So no need to worry for un-intented behaviours but also remember the error dection will catch invalid widgets and throw errors.

---

### ntk_widget_rerender (Widget, Path)
This function rerenders a Ntk Widget to a path, The path could either be another Ntk Widget or a JavaScript Node/DOM Element. This function will auto detect the type and render accordingly.

**Parameters**
 - *Widget* : The Widget which will be rerendered.
 - *Path* : The path where the widget will be rerendered

**Example**
```javascript
let myWidget = ntk_widget_new ('MyWidget');
ntk_widget_render (myWidget, document.body);
ntk_widget_rerender (myWidget, document.body);
ntk_widget_rerender (myWidget, document.body);
```

Widget Re-Render has built-in type detection but remember if you parse raw html or hlwtk component then it will try to treat it as a javascript node element so it may cause un-intended behaviours.

---

### ntk_widget_dispose (Widget, index=-1)
This function will destroy one or more rerendered ntk widget only. But won't affect the rendered widgets.

**Parameters**
 - *Widget* : The Rerendered Widget which will be destroyed.
 - *index* : The Rerendered Widget's index which will be destroyed, if index is `-1` then it will destroy all the re-rendered widgets othervise follow the indexing (default `-1`).

**Example**
```javascript
let myWidget = ntk_widget_new ('MyWidget');
ntk_widget_render (myWidget, document.body);
ntk_widget_rerender (myWidget, document.body);
ntk_widget_rerender (myWidget, document.body);
ntk_widget_dispose(myWidget);
```

Widget Dispose has built-in error detection machenism. So no need to worry for un-intented behaviours but also remember the error dection will catch invalid widgets and throw errors.

---

### ntk_widget_add_attribute (Widget, Attribute, Value)
This function will add an attribute to a widget, if attribute is already present then will update it's value without overwritting the old value.

**Parameters**
 - *Widget* : The Widget which will be having the attribute.
 - *Attribute* : The Attribute to be added or updated / value.
 - *Value* : The value of the attribute.

**Example**
```javascript
let myWidget = ntk_widget_new ('MyWidget');
ntk_widget_add_attribute (myWidget, 'id', 'myId');
ntk_widget_render (myWidget, document.body);
```

Add Attribute has built-in error detection machenism. So no need to worry for un-intented behaviours but also remember the error dection will catch invalid widgets and throw errors.

---

### ntk_widget_set_attribute (Widget, Attribute, Value)
This function will set an attribute to a widget But if the attribute isn't present in the widget then it will throw a warning.

**Parameters**
 - *Widget* : The Widget which will be having the attribute.
 - *Attribute* : The Attribute to be set.
 - *Value* : The value to be set to the attribute.

**Example**
```javascript
let myWidget = ntk_widget_new ('MyWidget');
ntk_widget_add_attribute (myWidget, 'id', 'myId');
ntk_widget_set_attribute (myWidget, 'id', 'newId');
ntk_widget_render (myWidget, document.body);
```

Set Attribute has built-in error detection machenism. So no need to worry for un-intented behaviours but also remember the error dection will catch invalid widgets and throw errors.

---

### ntk_widget_has_attribute (Widget, Attribute)
This function will checks if a widget has an attribute or not , If yes then it will return true othervise false.

**Parameters**
 - *Widget* : The Widget which will be checked.
 - *Attribute* : The Attribute to be checked.

**Example**
```javascript
let myWidget = ntk_widget_new ('MyWidget');
ntk_widget_add_attribute (myWidget, 'id', 'myId');
ntk_widget_set_attribute (myWidget, 'id', 'newId');
if (ntk_widget_has_attribute (myWidget, 'id'))
    console.log ('The widget is attribute');
else 
    console.log ('The widget don\'t has the attribute');
ntk_widget_render (myWidget, document.body);
```

Has Attribute has built-in error detection machenism. So no need to worry for un-intented behaviours but also remember the error dection will catch invalid widgets and throw errors.

---

### ntk_widget_remove_attribute (Widget, Attribute)
This function will remove an attribute from a widget.

**Parameters**
 - *Widget* : The Widget which will be checked.
 - *Attribute* : The Attribute to be removed.

**Example**
```javascript
let myWidget = ntk_widget_new ('MyWidget');
ntk_widget_add_attribute (myWidget, 'id', 'myId');
ntk_widget_set_attribute (myWidget, 'id', 'newId');
if (ntk_widget_has_attribute (myWidget, 'id'))
    ntk_widget_remove_attribute (myWidget, 'id');
else 
    console.log ('The widget don\'t has the attribute');
ntk_widget_render (myWidget, document.body);
```

Remove Attribute has built-in error detection machenism. So no need to worry for un-intented behaviours but also remember the error dection will catch invalid widgets and throw errors.

---

### ntk_widget_copy (Widget)
This function will return the copied version of a ntk widget.

**Parameters**
 - *Widget* : The Widget which will be copied.

**Example**
```javascript
let myWidget = ntk_widget_new ('MyWidget');
ntk_widget_set_content (myWidget, 'Ntk is awesome!');
let myWidget2 = ntk_widget_copy (myWidget);
ntk_widget_set_content (myWidget, 'Ntk is awesome x2!');

ntk_widget_render (myWidget);
ntk_widget_render (myWidget2);
```

Widget Copy has built-in error detection machenism. So no need to worry for un-intented behaviours but also remember the error dection will catch invalid widgets and throw errors.

---

### ntk_widget_copy_exact (Widget)
This function will return the exact copied version of a ntk widget including same identity and config.

**Parameters**
 - *Widget* : The Widget which will be exact copied.

**Example**
```javascript
let myWidget = ntk_widget_new ('MyWidget');
ntk_widget_set_content (myWidget, 'Ntk is awesome!');
let myWidget2 = ntk_widget_copy_exact (myWidget);
ntk_widget_set_content (myWidget, 'Ntk is awesome x2!');

ntk_widget_render (myWidget);
ntk_widget_render (myWidget2);
```

*ntk_widget_copy copies the widget but creates a new configuration and identities for the widget but copy_exact returns the exact and closest copy of a widget*

Copy Exact has built-in error detection machenism. So no need to worry for un-intented behaviours but also remember the error dection will catch invalid widgets and throw errors.

---

### ntk_widget_temporary_root (Widget)
This is a confusing function but it is super important in ntk and eventually contributes to it's own core development. So what it does is that this shifts the root of a widget to it's data temporarily. Let's exam in!

We have a ntk widget with content as a html button like this!
```javascript
let btn = ntk_widget_new ('btn');
ntk_widget_set_content (btn, `
    <button>
        Click me!
    </button>
`);
```
Okay here the actual rendered output will be:
```html
<hlwtk_component>
    <button>
        Click me!
    </button>
</hlwtk_component>
```
Why? Because ntk uses HLWTK as it's rendering engine and all the Ntk Widgets are internally HLWTK Components , But as per the structure you can see that out button is the child of HLWTK Component right? Means what every you will do with ntk won't be applied on button but the HLWTK Component, Hmm this is fine but what if you want to add a class to your button ? Then it will become impossible right? Well here's why temporary root came, It will shift the root temporarily for you to do your work like.
```javascript
let btn = ntk_widget_new ('btn');
ntk_widget_set_content (btn, `
    <button>
        Click me!
    </button>
`);

// if you apply temporarily root then it will look like
let temp = ntk_widget_temporary_root (btn);
```
Now the temp's render output will be this
```html
    <button>
        Click me!
    </button>
```

Because the root is shifted for temp, But still the btn will be:
```html
<hlwtk_component>
    <button>
        Click me!
    </button>
</hlwtk_component>
```

So basically temporary root shifted the hlwtk_component to a void world and button to up level , and up level was the root of the widget to the button eventually became the root of the widget now what every will you do with ntk will be applied to the temporary button root , But this won't affect the actual widget.

The Widger parameter is the widget whose first child element will become the root in this case it was a button.

This function has error detection too. So be carefull

---

### ntk_widget_write_content (Widget, Content)
This is another confusing function but this works similarly the ntk_widget_set_content (Widget, Content) does , But this works in a more force-full manner.

---

### ntk_widget_write_root (Widget)
This is another confusing but also another super important function because when you uses temporary root to shift the root of a widget temporary then it makes a exact copy of real element and shift it so it don't affects the real widget , So when your work with temporary widget is done and you want to make it physical then you need to write the changes directly to it's root, Now this may become complex so ntk provides this function which will auto detect the widget without relying on DOM from tracking list and write actual changes to real widget.

The widget is the temporary root which will be written.

**Example**
```javascript
let btn = ntk_widget_new ('btn');
ntk_widget_set_content (btn, `
    <button>
        Click me!
    </button>
`);
let temp = ntk_widget_temporary_root (btn);
ntk_widget_add_attribute (btn, 'class', 'btn-click');
ntk_widget_write_root (temp);
```

And now you have mastered the temporary shifting! Awesome , you must be proud on yourself for that.

Just remember Write Root also has built-in error handeling so use it carefully.

---

### Congratulations For Completing the Ntk-l01's Widget System!
You have shown that you are very bold, Congratulations again to come up this far 💐. This would be the longest part of Ntk-l01!. It's the good time to praise yourself and get a nice break from coding because we also need to focus on out health! Feel free to comeback later dear solider.

---

## Ntk Core 
Congratulations again for completing the widget system of Ntk! But it's now time to go deeper inside the Ntk's core because this is the part you won't forget to use. And as the creator of Ntk i can assure you that you don't need to be harsh on yourself if you find this part challenging because this is actually pretty confusing. So let's dive deeper into the Ntk's Core.

### ntk_pkg_new ()
This function creates a new package `x` digit long where `x` is represented by ntkPkgBase because `x` is the base of package length, by default 64.

**Parameters**
 - None

**Example**
```javascript
let pkg = ntk_pkg_new (); // 64 digit long
ntkPkgBase = 6;
pkg = ntk_pkg_new(); // 6 digit long
```

## Signals
Signals are also the part of the Ntk Core but they are always taught seperately because Ntk Signals aren't normal events like click mouse over etc, They are very powerfull , Flexible & Reusable Through Routes. Basically when you want someone to click on something then something should happen whihc is called interactivity, Is done with Signals, Like a button click should trigger a function.

If you are familiar with html onclick and javascript addEventListener then Signals must not be the biggest obstacle so let's go in depth.

Let say i have a button okay! Now i want if someone click the button then alert popup should be opened and say you clicked the button. Here we uses Signals, where click is the signal and button is the area of click and alert is a function to trigger.

you can make signals by connecting a signal to a widget which you can guess is very simple with ntk through the `ntk_signal_connect (Signal, Widget, Callback, Route=0)` as of now ignnore the the `Route=0` we will comeback to it later , Here `Signal` tells which signal to use (Example: click, mouseover etc.), `Widget` tells ntk which widget to be connected with signal, `Callback` tells what function to call when Signal is triggered.

**Example**
```javascript
let btn = ntk_widget_new (`button`);
ntk_widget_set_content (btn, `
    <button>
        Click Me
    </button>
`);

function say(){
    alert ('You clicked the button');
}

ntk_signal_connect ('click', btn, 'say');
```

You can add multiple functions with 'firstfunction();secondfunction' just remember that function is in the string and the last function name don't has any symbol next to it. And you can use any signal which exists in html for example onclick is present sure then you can use click , Same as anything html supports.

Now let suppose you want to remove the signal from a widget, Well it is simple you need to disconnect it and for disconnecting a signal you need to use `ntk_signal_disconnect (Signal, Widget)` where `Signal` is the signal you want to disconnect and `Widget` is the widget you want the signal to be removed from.

**Example**
```javascript
let btn = ntk_widget_new (`button`);
ntk_widget_set_content (btn, `
    <button>
        Click Me
    </button>
`);

function say(){
    alert ('You clicked the button, Now it\'s no longer clickable!');
    ntk_signal_disconnect ('click', btn);
}

ntk_signal_connect ('click', btn, 'say');
```

## Signal Routes in Ntk
Signal Routes are the part of Ntk which scares a large number of developers but they aren't that scary when you are used to them. And when you are used to them you will find them very usefull in your everyday web development so let's start learning them.

**What do you understands by a Route?**
You may probably say "A Path where busses runs" Well that's correct and in ntk it's similar concept but here the bus is your Signal and passangers are your functions waiting on that route for there bus (Signal) to come anc pick them up. This is exactly what routes are in ntk, Imagine you are making a game's UI and you want that when someone clicks the buttons then a sound effect must play, So instead of manually writting it to a function and calling it , You can directly make a seperate function to play audio and send that function to a route and just assign that route to the Signal and that's it.

Means it will visually look like this

```bash
Signal ===== <Your function 1> ----- <Your function 2> ----- <Your function...>
```

The Signal always runs from a route and it needs to run from a route so by default it runs from route 0, You can create custom routes too and make a signal to run from that route. So when a signal is triggered then it will run on a route and pick all the functions assigned to that route and execute them. 

You can create custom routes with `ntk_route_create (amount=1)` the amount is the amount of route which will be created by ntk, For example default is 1 so total routes will be 2 after calling this function because route 0 is created by default by ntk and it's recommended to not to touch route 0 and create a seperate route to add functions, This way the default route is always empty. 

**Example**
```javascript
let btn = ntk_widget_new (`button`);
ntk_widget_set_content (btn, `
    <button>
        Click Me
    </button>
`);

function say(){
    alert ('You clicked the button, Now it\'s no longer clickable!');
    ntk_signal_disconnect ('click', btn);
}

ntk_route_create();
ntk_route_attach_function(1, say);

ntk_signal_connect ('click', btn, '', 1); // run on route number 1
```

Now `ntk_route_attach_function (Route, Function)` attaches a function to a route as seen in the example where it is attaching say to route 1 and signal is running on route 1.

You optionally has `let ntkRoutes = [[]];` and `ntk_route_execute(Route)` these are direct ways to run routes , the `let ntkRoutes = [[]];` is physical route with route 0 by default , I know it's confusing and that's exactly why ntk has route management functions because routes executions are done like this `ntkRoutes[0][0]();` manually which is highly unredable so ntk provides very very high level abstractions on top of this to make routes more easier and `ntk_route_execute(Route)` directly executes a route so it's not recommended to directly use this, Ntk it itself use it when required.


## Congratulations! 💐
You have learned the hardest part of ntk! Now it's time to be proud on your because now you know the main ntk and how to use it! But beleave me source vise , you are still in the beggining on ntk because one of the main things in ntk is it's built-in widgets which are literally huge! Now without demotivating you , You actually have learnt main parts on ntk and it's time to take a deep break from coding again 💐 My recommendation is 1 day at the least.

---

## Ntk User-Defined Widgets
So you are here again! Now let's dive deeper in using ntk's knowledge you have gained till now to make custom widgets , Which for ntk are called user-defined widgets. Well this part is just to inform you that you can make your own widgets too , And there is no fixed way to do it. You can make them from scratch or from ntk built int widgets or in any way you want! Let's make a classic button widget with Ntk!

```javascript
function myButton (label){
    let html = `<button>${label}</button>`;
    let widget = ntk_widget_new ('myButton');
    ntk_widget_set_content (widget, html); // You can use write content too.
    return widget;
}

// and boomb we are all set now we can use
let btn = myButton('click me');
ntk_widget_render (btn, document.body);
```

And beleave me that's all it! You can make your custom widgets in any style , Until it's returning a ntk_widget_new() then it's a valid ntk widget and can be used with Ntk Widget System. And also all the Ntk's built in widgets are made like this!

---

## Ntk Built-in Widgets
Ntk's built-in widgets are nothing but are prestyled and premade widgets ships with Ntk and you are ready to use them in your projects. All the ntk built-in widget follows the Ntk25 Standards so they also starts like ntk_<widget>_new and ntk_<widget>_<options>, Similar to Gtk.

## Ntk Button
### ntk_button_new (label='Ntk Button', icon=null)
This is an advanced button widget, Which allows you to create a button with icon and label if needed and also with Ntk's Modern Theme.

**Parameters**
 - **label** : Sets the label of the button (i.e: click me)
 - **icon** : Sets the icon of the button , if null the no icon will be set.

**Example**
```javascript
let btn = ntk_button_new ('click me');
ntk_widget_render (btn, document.body);
```

### ntk_button_set_label (Widget, Label)
This will set a new label to an existing `Ntk Button` widget.

**Parameters**
 - **Widget** : The Ntk Button Widget whose label will be updated.
 - **Label** : Sets the label of the button (i.e: click me).

**Example**
```javascript
let btn = ntk_button_new ('click me');
ntk_widget_render (btn, document.body);
ntk_button_set_label (btn, 'hi there!');
```

### ntk_button_get_label (Widget)
This will get and return the label of an existing `Ntk Button` widget.

**Parameters**
 - **Widget** : The Ntk Button Widget whose label will be get.

**Example**
```javascript
let btn = ntk_button_new ('click me');
ntk_widget_render (btn, document.body);
console.log(ntk_button_get_label (btn))
```

### ntk_button_set_icon (Widget, Path)
This will set a new icon to an existing `Ntk Button` widget.

**Parameters**
 - **Widget** : The Ntk Button Widget whose icon will be set/updated.
 - **Path** : The source to the icon (i.e: Image via URLs , Image via Local Path, Image via base64).

**Example**
```javascript
let btn = ntk_button_new ('click me');
ntk_widget_render (btn, document.body);
ntk_button_set_icon (btn, 'path/to/image.png');
```

### ntk_button_get_icon (Widget)
This will get and return the icon source of an existing `Ntk Button` widget.

**Parameters**
 - **Widget** : The Ntk Button Widget whose icon source will be get.

**Example**
```javascript
let btn = ntk_button_new ('click me');
ntk_widget_render (btn, document.body);
console.log(ntk_button_get_icon (btn))
```

Nice now you are a Ntk Button Master!

## Ntk Html
### ntk_html_new (Html)
This is nothing but simple Ntk Widget with html content as inside , You can use it like this:

```javascript
let html = ntk_html_new (`
    <h1> This is my html webpage with Ntk!</h1>
    <p> Ntk is solid for building websites </p>
`);
ntk_widget_render (html, document.body);
```

*And With that's it! Final Congratulations 🎉 Because now you can make professional grade solid webpages in `Ntk` and with ntk experience you can shift to `Gtk` later easily! (If you are a C++ or C dev knows pointers very well). But any way congraulations 🎉 Warrior , It's the time to celebrate and the time to take a deep break, I am also feeling tired because i have written from without breaks but you should take a break because it will be helpfull for maintaining safe coding health! 

Have a nice day by ghgltggamer.