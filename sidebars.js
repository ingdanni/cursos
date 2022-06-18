/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{
  //   type: 'autogenerated',
  //   dirName: '.'
  // }],

  // But you can create a sidebar manually

  flutterSidebar: [
    {
      type: 'category',
      label: 'Primer parcial',
      items: [
        'flutter/flutter1',
        {
          type: 'category',
          label: 'Lenguaje Dart',
          items: [
              'flutter/flutter2',
              'flutter/flutter3',
              'flutter/flutter4',
          ]
        },
        'flutter/flutter5',
        'flutter/flutter6',
        'flutter/flutter7',
        'flutter/flutter8',
        'flutter/flutter-exam1',
      ]
    },
    {
      type: 'category',
      label: 'Segundo parcial',
      items: [
        'flutter/flutter9',
        'flutter/flutter10',
        'flutter/flutter11',
        'flutter/flutter12',
        'flutter/flutter13',
        'flutter/flutter14',
        'flutter/flutter15',
        'flutter/flutter16',
        'flutter/hw-wsp-clone',
        'flutter/flutter17',
      ]
    }
  ],

  androidSidebar: [
    {
      type: 'category',
      label: 'Primer parcial',
      items: [
        'android/android1',
        'android/android2',
        'android/android3',
        'android/android4',
        'android/android5',
        'android/android6',
        'android/assesment1', // tarea 1
        'android/android7',
        'android/android8',
        'android/android9',
        'android/android10',
        // 'android/exam1',
      ],
    },
    // {
    //   type: 'category',
    //   label: 'Segundo Parcial',
    //   items: [
    //     'android/android11',
    //     'android/android12',
    //     'android/android13',
    //     'android/android14',
    //     'android/android15',
    //     'android/android16',
    //     'android/android17',
    //     'android/android18',
    //     'android/exam2',
    //   ]
    // },
  ],

};

module.exports = sidebars;
