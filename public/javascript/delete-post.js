async function deleteFormHandler(event) {
  console.log("deleting a post...");
  //event.preventDefault();
  if (!confirm("Are you sure you want to delete this post?")) {
    return;
  }
  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  const response = await fetch(`/api/posts/${id}`, {
    method: "DELETE",
  });

  if (response.ok) {
    document.location.replace("/");
  } else {
    alert(response.statusText);
  }
}

//document.querySelector("button").addEventListener("click", deleteFormHandler);

var el = document
  .querySelector("#delete-post-btn")
  .addEventListener("click", deleteFormHandler);
