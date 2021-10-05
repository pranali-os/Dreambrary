const rootStyles = window.getComputedStyle
(document.documentElement)

if (rootStyles.getPropertyValue('--book-cover-width-large') != 
null && rootStyles.getPropertyValue('--book-cover-width-large') !== '') {
  ready()
} else {
  document.getElementById('main-css')
  .addEventListener('load', ready)
}

function ready(){
  const coverWidth = parseFloat(rootStyles.getPropertyValue('--book-cover-width-large'))
  const coverAspectRatio = parseFloat(rootStyles.getPropertyValue('--book-cover-aspect-ratio'))
  const coverHeight = coverWidth/ coverAspectRatio


  document.addEventListener('DOMContentLoaded', function() {
    FilePond.registerPlugin(
      FilePondPlugInImagePreview,
      FilePondPlugInImageResize,
      FilePondPluginImageTransform,
      FilePondPlugInFileEncode,
    )      
  
    FilePond.setOptions({
      server: {
          process: './process',
          fetch: null,
          revert: null
      },
      stylePanelAspectRatio: 1/ coverAspectRatio,
      imageResizeTargetWidth: coverWidth,
      imageResizeTargetHeight: coverHeight,
  
    })
  
  })  
  FilePond.parse(document.body)
  
}































//   document.addEventListener('DOMContentLoaded', function() {
//     // Register any plugins
//     FilePond.registerPlugin(FilePondPluginImagePreview);

//     // Create FilePond object
//     const inputElement = document.querySelector('input[type="file"]');
//     const pond = FilePond.create(inputElement);
//   })
  
      


// FilePond.registerPlugin(
//    // FilePondPlugInImagePreview,
//     FilePondPlugInImageResize,
//     FilePondPlugInFileEncode,
    
// )

// FilePond.setOptions({
//     stylePanelAspectRatio: 150 / 100
// })

// JSON.parse(document.body)
//const inputElement = document.querySelector('input[type="file"]');
//const pond = FilePond.create(inputElement, {

 
  //imageResizeTargetWidth: 256,

  // set contain resize mode
 // imageResizeMode: 'contain',

 // onaddfile: (err, fileItem) => {                                 // add onaddfile callback
    //console.log(err, fileItem.getMetadata('resize'));
  //}
//})  