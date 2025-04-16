/*
 * Copyright (c) ghgltggamer 2025
 * Written by ghgltggamer
 * Ntk - Neutral Tool Kit (A ToolKit For Awesome Web Development)
 * Licensed under the MIT License
 * Checkout the README.md for more information
 * This is one of the source file for Ntk Library, Please build it using mklib as per shown in the README.md file.
*/

// The main file containing Ntk's core functionality

let ntkPkgBase = 64;
function ntk_pkg_new (){
    let pkg = "";
    for (let i = 0;i <= ntkPkgBase;i++)
        pkg += `${Math.floor(Math.random()*10)}`;
    return pkg;
}



// signals
// function ntk_null(){};
let ntkRoutes = [[]];
function ntk_signal_connect (Signal, Widget, Callback, Route=0){
    if (Route > ntkRoutes.length-1)
        console.error ('Ntk Error _> Ntk Core Signal Error (The Route ' + Route + ' was out of reach)');
    else {
        if (ntk_widget_is_valid(Widget)){
            let sid = "";
            for (let i = 0;i <= 10;i++)
                sid += `${Math.floor(Math.random()*10)}`;
            ntk_widget_add_attribute (Widget, `on${Signal}`, `${Callback}();ntk_route_execute(${Route});`);
            ntk_widget_add_attribute (Widget, 'sid', sid);
        }
        else 
            console.error (`Ntk Error _> Ntk Widget Error (The widget assigned to the ntk_signal_connect() was invalid)`);
    }
}



function ntk_route_create (amount=1){
    for (let i = 0;i <= amount;i++){
        ntkRoutes.push([]); // add a new route
    }
}



function ntk_route_attach_function (Route, Function){
    if (Route > ntkRoutes.length-1)
        console.error ('Ntk Error _> Ntk Core Signal Error (The Route ' + Route + ' was out of reach)');
    else 
        ntkRoutes[Route].push (Function);
}



function ntk_signal_disconnect(Signal, Widget){
    if (ntk_widget_is_valid(Widget)){
        if (ntk_widget_has_attribute(Widget, `on${Signal}`) && ntk_widget_has_attribute(Widget, `sid`)){
            ntk_widget_remove_attribute(Widget, `on${Signal}`);
            ntk_widget_remove_attribute(Widget, `sid`);
        }
        else 
            console.warn (`Ntk Warning _> Ntk Core Signal Warning (The Widget provided to the ntk_signal_disconnect don't has the signal ${Signal} connected, No SID Found there, Ignoring the connection)`);
    }
    else 
        console.error (`Ntk Error _> Ntk Widget Error (The widget assigned to the ntk_signal_disconnect() was invalid)`);
}



function ntk_route_execute(Route){
    for (let i = 0;i < ntkRoutes[Route].length;i++)
        ntkRoutes[Route][i]();
}