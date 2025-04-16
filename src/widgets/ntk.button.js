/*
 * Copyright (c) ghgltggamer 2025
 * Written by ghgltggamer
 * Ntk - Neutral Tool Kit (A ToolKit For Awesome Web Development)
 * Licensed under the MIT License
 * Checkout the README.md for more information
 * This is one of the source file for Ntk Library, Please build it using mklib as per shown in the README.md file.
*/

// This is the button widget of ntk
function ntk_button_new (label='Ntk Button', icon=null){
    let image = "";
    if (icon !== null)
        image = `<img src="${icon}" width="30px" style="margin-right: 10px;">`;
    let data = `<button class="ntk_button_new">
    ${image}
    <span>${label}</span>
</button>`;
    let widget = ntk_widget_new ();
    ntk_widget_set_content (widget, data);
    return widget;
}



function ntk_button_set_label (Widget, Label){
    ntk_widget_convert (Widget, NTK_JNODE).getElementsByTagName('span')[0].innerText = Label;
}



function ntk_button_get_label (Widget){
    return ntk_widget_convert (Widget, NTK_JNODE).getElementsByTagName('span')[0].innerText;
}




function ntk_button_set_icon (Widget, Path){
    let img = ntk_widget_convert (Widget, NTK_JNODE).getElementsByTagName('img')[0];
    if (img == null){
        let temp = ntk_widget_temporary_root (Widget);
        ntk_widget_write_content(temp, `<img src="${Path}" width="30px" style="margin-right: 10px;"> ${ntk_widget_get_content(temp)}`);
        ntk_widget_write_root (temp);
    }
    else {
        img.src = Path;
    }
}



function ntk_button_get_icon (Widget){
    let icon = null;
    let img = ntk_widget_convert (Widget, NTK_JNODE).getElementsByTagName('img')[0];
    if (img == null){
        console.warn (`Ntk Warning _> Ntk Widget Button Icon Warning (Ntk Button assigned to ntk_button_get_icon() didn't had any icon applied to it, Ignoring the get icon request and returning null)`)
    }
    else {
        icon = img.src;
    }
    return icon;
}