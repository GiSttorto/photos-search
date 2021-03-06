Technical Guidelines

All API uses must use the hotlinked image URLs returned by the API under the photo.urls  properties. This applies to all uses of the image and not just search results.

When your application performs something similar to a download (like when a user chooses the image to include in a blog post, set as a header, etc.), you must send a request to the download endpoint returned under the photo.links.download_location  property.

When displaying a photo from Unsplash, your application must attribute Unsplash, the Unsplash photographer, and contain a link back to their Unsplash profile. All links back to Unsplash should use utm parameters in the ?utm_source=your_app_name&utm_medium=referral .

Your application’s Access Key and Secret Key  must remain confidential. This may require using a proxy if accessing the API client-side.


## Main Libraries

- React
- Redux
- React Infinite Scroll Component

## Start

- npm i
- npm start

## To do list

- Make infinite scroll smooth
- Create corresponding types
- Add modal to mazimize image
- Add download and like tools
- Add links to author social medias
- Create better style for author details when hover image
- Implement testing
- Create Rest call for API

