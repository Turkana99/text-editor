tinymce.init({
  selector: "#def",
  width: 1500,
  height: 700,
  plugins: [
    "advlist",
    "autolink",
    "link",
    "image",
    "lists",
    "charmap",
    "preview",
    "anchor",
    "pagebreak",
    "searchreplace",
    "wordcount",
    "visualblocks",
    "code",
    "fullscreen",
    "insertdatetime",
    "media",
    "table",
    "emoticons",
    "template",
    "codesample",
  ],
  toolbar:
    "undo redo | formatselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image " +
    "undo redo | styles | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | align alignleft aligncenter alignright alignjustify | lineheight | tinycomments | checklist numlist bullist indent outdent | emoticons charmap | removeformat" +
    "bullist numlist outdent indent | link image | print preview media fullscreen |" +
    "forecolor backcolor emoticons",
  images_upload_url: "/upload-image", // Specify your server-side image upload endpoint
  images_upload_base_path: "/uploads", // Specify the base path for uploaded images
  content_style: `img { width: 100% }`,
  setup: function (editor) {
    console.log(tinymce.dom.DOMUtils.DOM.decode);
    // Add a click event handler to the button
    document
      .getElementById("getEditorContentButton")
      .addEventListener("click", function () {
        // Get the content of the editor
        var editorContent = editor.getContent();

        // Do something with the editor content (e.g., log it to the console)
        console.log(
          "Editor Content:",
          tinymce.dom.DOMUtils.DOM.decode(editorContent)
        );
      });
  },
});

// // Editorun dəyərini əldə et
// let textareaValue = editor?.getContent();

// // Əldə edilən dəyəri istifadə et və ya çap et
// console.log("TinyMCE Textarea dəyəri:", textareaValue);
// // Burada əldə edilən dəyəri istifadə edə bilərsiniz.
