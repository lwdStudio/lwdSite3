const fs = require('fs')
const path = require('path')
const repng = require('repng')

const SocialImage = require('../src/components/socialImage')

export default function generateSocialImage({node}) {
    const toBeUse = SocialImage({
      node: node
    })

    const image = repng(toBeUse,{width:1200,height:630});
    const finalPath = path.join("./image/og-image/", node.pageSlug);
    fs.writeFileSync(finalPath, image);

    console.log(`${node.pageSlug}'s Open Graph is Generated`)
    return finalPath
}
