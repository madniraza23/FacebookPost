import FbImages from 'react-fb-image-grid'

function Images(){
    const images = [
        'https://www.thenews.com.pk/assets/front/tiny_mce/source/Cow-Mandi-2T.jpg',
        'https://beam.pk/wp-content/uploads/2020/07/Masha-Allah-White-Cow-Gai-In-Karachi-Super-Highway-Maweshi-Mandi-201662643461_201683119406-600x400.jpg',
        'https://www.zameen.com/blog/wp-content/uploads/2019/08/image-4-8-1024x640.jpg',
        'https://i.ytimg.com/vi/gmY0VJqtl4g/maxresdefault.jpg',
        'https://kfoods.com/photos/images_photos/photos/72021655_201692233443.jpg'
    ]
    return (
        <div>
            <FbImages
            images = {images}
            width = {40}
            />
        </div>
    )
}

export default Images;