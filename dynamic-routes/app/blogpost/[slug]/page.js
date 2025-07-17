import React from "react";

export default function page({ params }) {
//throw new Error("This is a test error");
  let expectedSlugs = ["Romaisa", "Aamina", "Gian", "Doraemon", "Shinchan"];
  if (expectedSlugs.includes(params.slug)) {
    return <div>My Blog : {params.slug}</div>;
  } else {
    return (
      <div>
        <h1>Blog Not Found</h1>
        <p>The blog you are looking for does not exist.</p>
      </div>
    );
  }
}
