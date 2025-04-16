/*
 * Copyright (c) ghgltggamer 2025
 * Written by ghgltggamer
 * Ntk - Neutral Tool Kit (A ToolKit For Awesome Web Development)
 * Licensed under the MIT License
 * Checkout the README.md for more information
 * This is one of the source file for Ntk Library, Please build it using mklib as per shown in the README.md file.
*/

// This is the ntk widget , Responsible for making any ntk widget
let ntkWidgetsTrackList = [];
function ntk_widget_new (Pkg_name, Pkg_Track=true){
    let Pkg = ntk_pkg_new ();
    let Widget = HLWTK_Component();
    let Widget_Config = {
        pkg_config : {
            pkg : Pkg,
            pkg_name : Pkg_name,
        },
        nhlwtk : Widget
    }
    if (Pkg_Track) ntkWidgetsTrackList.push(Widget_Config);
    return Widget_Config;
}



function ntk_widget_is_valid (Widget){
    let is_valid = 0;
    if (typeof Widget.nhlwtk !== 'undefined' && typeof Widget.pkg_config !== 'undefined' && typeof Widget.nhlwtk !== 'undefined')
        is_valid = 1;
    return is_valid;
}



function ntk_widget_set_content (Widget, Content){
    if (ntk_widget_is_valid(Widget))
        Widget.nhlwtk.control.content (Content);
    else
        console.error (`Ntk Error _> Ntk Widget Error (The Widget You Passed to the ntk_widget_set_content() was not a valid Ntk Widget).`);
}



function ntk_widget_get_content (Widget){
    let content = "";
    if (ntk_widget_is_valid (Widget))
        content = Widget.nhlwtk.control.content();
    else
        console.error (`Ntk Error _> Ntk Widget Error (The Widget You Passed to the ntk_widget_get_content() was not a valid Ntk Widget).`);
    return content;
}



function ntk_widget_add_content (Widget, Content){
    if (ntk_widget_is_valid(Widget))
        ntk_widget_set_content (Widget, ntk_widget_get_content(Widget) + Content);
    else 
        console.error ('Ntk Error _> Ntk Widget Error (The Widget provided to ntk_widget_add_content() was invalid)');
}



function ntk_widget_get_pkg (Widget){
    let pkg = "";
    if (ntk_widget_is_valid(Widget))
        pkg = Widget.pkg_config.pkg;
    else
        console.error (`Ntk Error _> Ntk Widget Error (The Widget You Passed to the ntk_widget_get_pkg() was not a valid Ntk Widget).`);
    return pkg;
}



function ntk_widget_set_pkg (Widget, Pkg){
    if (ntk_widget_is_valid(Widget))
        Widget.pkg_config.pkg = Pkg;
    else 
        console.error (`Ntk Error _> Ntk Widget Error (The Widget You Passed to the ntk_widget_set_pkg() was not a valid Ntk Widget).`);
}



function ntk_widget_convert (Widget, Type){
    let typecasted = null;
    if (ntk_widget_is_valid (Widget)){
        if (Type == NTK_WIDGET)
            typecasted = Widget;
        else if (Type == NTK_HTML)
            typecasted = ntk_widget_get_content(Widget);
        else if (Type == NTK_JNODE)
            typecasted = Widget.nhlwtk.hlwtk_component_root;
        else if (Type == NTK_HLWTK)
            typecasted = Widget.nhlwtk;
        else 
            console.error ('Ntk Error _> Ntk Widget Error (The Type given to the ntk_widget_convert() was unknown)');
    }
    else 
        console.error (`Ntk Error _> Ntk Widget Error (The Widget You Passed to the ntk_widget_convert() was not a valid Ntk Widget).`);
    return typecasted;
}



function ntk_widget_render (Widget, Path){
    if (ntk_widget_is_valid(Widget)){
        if (ntk_widget_is_valid (Path))
            Widget.nhlwtk.control.make (Path.nhlwtk, HLWTK_COMPONENT);
        else 
            if (typeof Path != null && Path.appendChild)
                Widget.nhlwtk.control.make (Path);
            else 
                console.error ('Ntk Error _> Ntk Widget Render Error (The Path assigned to the ntk_widget_render() was invalid)')
    }
    else 
        console.error (`Ntk Error _> Ntk Widget Error (The Widget You Passed to the ntk_widget_render() was not a valid Ntk Widget).`);
}



function ntk_widget_destroy (Widget){
    if (ntk_widget_is_valid (Widget))
        Widget.nhlwtk.control.destroy();
    else
        console.error (`Ntk Error _> Ntk Widget Error (The Widget You Passed to the ntk_widget_destroy() was not a valid Ntk Widget).`);
}




function ntk_widget_copy (Widget){
    let copy = null;
    if (ntk_widget_is_valid (Widget))
        copy = ntk_widget_new (),
        ntk_widget_set_content (copy, ntk_widget_get_content(Widget));
    else 
        console.error ('Ntk Error _> Ntk Widget Error (The Widget provided to ntk_widget_copy() is not a valid Ntk Widget.');
    return copy;
}



function ntk_widget_rerender (Widget, Path){
    if (ntk_widget_is_valid(Widget)){
        if (ntk_widget_is_valid (Path))
            Widget.nhlwtk.control.bake (Path.nhlwtk, HLWTK_COMPONENT);
        else 
            if (typeof Path != null && Path.appendChild)
                Widget.nhlwtk.control.bake (Path);
            else 
                console.error ('Ntk Error _> Ntk Widget Render Error (The Path assigned to the ntk_widget_rerender() was invalid)')
    }
    else 
        console.error (`Ntk Error _> Ntk Widget Error (The Widget You Passed to the ntk_widget_rerender() was not a valid Ntk Widget).`);
}



function ntk_widget_dispose (Widget, index=-1){
    if (ntk_widget_is_valid (Widget))
        if (index === -1)
            Widget.nhlwtk.control.dispose(HLWTK_DISPOSE_EVERYTHING);
        else 
            Widget.nhlwtk.control.dispose(index);
    else
        console.error (`Ntk Error _> Ntk Widget Error (The Widget You Passed to the ntk_widget_dispose() was not a valid Ntk Widget).`);
}



function ntk_element_convert (Element, Type){
    let widget = null;
    if (Type == NTK_HTML){
        widget = ntk_widget_new ();
        ntk_widget_set_content (widget, Element);
    }
    else if (Type == NTK_JNODE){
        widget = ntk_widget_new ();
        widget.nhlwtk.hlwtk_component_root = Element;
    }
    else if (Type == NTK_HLWTK){
        widget = ntk_widget_new ();
        widget.nhlwtk = Element;
    }
    else if (Type == NTK_WIDGET){
        widget = Element;
    }
    else 
        console.error ('Ntk Error _> Ntk Widget Identity Error (Unknown Type was provided to ntk_element_convert())');
    return widget;
}



function ntk_widget_add_attribute (Widget, Attribute, Value){
    if (ntk_widget_is_valid (Widget)){
        let jwidget = ntk_widget_convert (Widget, NTK_JNODE);
        if (jwidget.hasAttribute(Attribute)) {
            jwidget.setAttribute(Attribute, jwidget.getAttribute(Attribute)+' '+Value);
        }
        else {
            jwidget.setAttribute(Attribute, Value);
        }
    }
    else 
        console.error ('Ntk Error _> Ntk Widget Error (Invalid widget passed to ntk_widget_has_attribute())');
}



function ntk_widget_has_attribute (Widget, Attribute){
    let status = 0;
    if (ntk_widget_is_valid(Widget)){
        if (ntk_widget_convert(Widget, NTK_JNODE).hasAttribute(Attribute))
            status = 1;
    }
    else 
        console.error ('Ntk Error _> Ntk Widget Error (Invalid widget passed to ntk_widget_has_attribute())');
    return status;
}



function ntk_widget_remove_attribute (Widget, Attribute){
    if (ntk_widget_is_valid (Widget)){
        let jwidget = ntk_widget_convert (Widget, NTK_JNODE);
        if (jwidget.hasAttribute(Attribute)) {
            jwidget.removeAttribute(Attribute);
        }
        else 
            console.warn (`Ntk Warning _> Ntk Widget Attribute Warning (The Widget has no attribute ${Attribute}, Can't remove a virtual attribute. Ignoring the removal request)`);
    }
    else 
        console.error ('Ntk Error _> Ntk Widget Error (Invalid widget passed to ntk_widget_remove_attribute())');
}



function ntk_widget_copy_exact (Widget){
    let copy = null;
    if (ntk_widget_is_valid (Widget))
        copy = ntk_widget_new ('ntk_widget_copy', false),
        ntk_widget_set_content (copy, ntk_widget_get_content(Widget)),
        copy.pkg_config.pkg = Widget.pkg_config.pkg,
        copy.pkg_config.pkg_name = Widget.pkg_config.pkg_name;
    else 
        console.error ('Ntk Error _> Ntk Widget Error (Invalid widget passed to ntk_widget_copy_exact())');
    return copy;
}



function ntk_widget_temporary_root (Widget){
    let temp = null;
    if (ntk_widget_is_valid(Widget)){
        temp = ntk_widget_copy_exact(Widget);
        // console.log (temp);
        ntk_widget_convert (temp, NTK_HLWTK).hlwtk_component_root = ntk_widget_convert (temp, NTK_JNODE).firstElementChild;
    }
    else {
        console.error ('Ntk Error _> Ntk Widget Error (Invalid widget passed to ntk_widget_temporary_root())');
    }
    return temp;
}



function ntk_widget_write_content (Widget, Content){
    if (ntk_widget_is_valid(Widget))
        ntk_widget_convert (Widget, NTK_JNODE).innerHTML = Content;
    else
        console.error (`Ntk Error _> Ntk Widget Error (The Widget You Passed to the ntk_widget_write_content() was not a valid Ntk Widget).`);
}



function ntk_widget_write_root (Widget){
    if (ntk_widget_is_valid(Widget)){
        for (let i = 0;i < ntkWidgetsTrackList.length;i++){
            if (ntkWidgetsTrackList[i].pkg_config.pkg == Widget.pkg_config.pkg)
                ntk_widget_write_content(ntkWidgetsTrackList[i], ntk_widget_convert(Widget, NTK_JNODE).outerHTML),
                ntk_widget_dispose (Widget),
                ntk_widget_destroy (Widget);
            else continue;
        }
    }
    else console.error ('Ntk Error _> Ntk Widget Error (Invalid widget passed to ntk_widget_write_root())');
}




function ntk_widget_set_attribute (Widget, Attribute, Value){
    if (ntk_widget_is_valid(Widget)){
        if (ntk_widget_has_attribute(Widget, Attribute)){
            ntk_widget_remove_attribute (Attribute);
            ntk_widget_add_attribute (Widget, Attribute, Value);
        }
        else console.warn ('Ntk Warning _> Ntk Widget Attribute Warning (The Assigned Ntk Widget Has no required attribute <' + Attribute + '> for ntk_widget_set_attribute(), Ignoring the Attribute Set Request)');
    }
    else console.error ('Ntk Error _> Ntk Widget Error (Invalid widget passed to ntk_widget_set_attribute())');
}