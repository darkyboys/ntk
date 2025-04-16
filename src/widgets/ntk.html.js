/*
 * Copyright (c) ghgltggamer 2025
 * Written by ghgltggamer
 * Ntk - Neutral Tool Kit (A ToolKit For Awesome Web Development)
 * Licensed under the MIT License
 * Checkout the README.md for more information
 * This is one of the source file for Ntk Library, Please build it using mklib as per shown in the README.md file.
*/

// This is the html widget of ntk
function ntk_html_new (Html){
    let widget = ntk_widget_new ('ntk_html_widget');
    ntk_widget_set_content (widget, Html);
    return widget;
}