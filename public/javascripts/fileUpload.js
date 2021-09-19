document.addEventListener('DOMContentLoaded', function() {
  FilePond.registerPlugin(
    FilePondPlugInImagePreview,
    FilePondPlugInImageResize,
    FilePondPluginImageTransform,
    FilePondPlugInFileEncode,
  )      

  FilePond.setOptions({
    stylePanelAspectRation: 150/100,
    imageResizeTargetWidth: 100,
    imageResizeTargetHeight: 150,

  })

})  
FilePond.parse(document.body)


































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