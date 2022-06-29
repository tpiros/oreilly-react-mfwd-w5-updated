import { AdvancedImage } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen';
import { format, quality } from '@cloudinary/url-gen/actions/delivery';
import { scale, thumbnail } from '@cloudinary/url-gen/actions/resize';
import { face } from '@cloudinary/url-gen/qualifiers/focusOn';
import { focusOn } from '@cloudinary/url-gen/qualifiers/gravity';

const Image = ({ name, showFace }) => {
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'tamas-demo',
    },
  });

  const cloudinaryPublicID = `jam/${name.toLowerCase().replace(/\s/g, '')}`;
  const characterImage = cld.image(cloudinaryPublicID);
  if (!showFace) {
    characterImage
      .resize(scale().width(400))
      .delivery(format('auto'))
      .delivery(quality('auto'));
  } else {
    characterImage
      .resize(thumbnail().gravity(focusOn(face())).width(50).height(50))
      .delivery(format('auto'))
      .delivery(quality('auto'));
  }

  return <AdvancedImage cldImg={characterImage} />;
};

export default Image;
