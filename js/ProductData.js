/**
 * Created by jycr753 on 7/26/15.
 */

module.exports = {
    // Load Mock Product Data Into localStorage
    init: function() {
        localStorage.clear();
        localStorage.setItem('product', JSON.stringify([
            {
                "id": 3831,
                "customer": 58,
                "box": 4778,
                "box_name": "test_box__34J3UP",
                "box_type": 1,
                "contents": "KÃƒÂ¸kkengrej",
                "status": 1,
                "status_text": "In storage",
                "billing_start": "2015-06-29",
                "billing_end": null,
                "base_price": 29,
                "additional_price": 10,
                "admin_url": "/admin/boxes/customerbox/3831/",
                "status_start": "2015-07-08",
                "registered": "2015-06-24T18:25:28Z",
                "pallet": 11,
                "pictures_urls": [
                    {
                        "id": 1217,
                        "customerbox": 3831,
                        "picture": "https://media-gobox.s3.amazonaws.com/customerbox_pictures/demo%40demo.com/test_box__34J3UP/cdv_photo_001.jpg",
                        "desktop_picture_thumbnail_url": "https://media-gobox.s3.amazonaws.com/CACHE/images/customerbox_pictures/demo%40demo.com/test_box__34J3UP/cdv_photo_001/cfcc80b353dc2fb93083e7e20aaedb31.jpg",
                        "desktop_picture_max_size_url": "https://media-gobox.s3.amazonaws.com/CACHE/images/customerbox_pictures/demo%40demo.com/test_box__34J3UP/cdv_photo_001/33084e1d8848c615c15718e8fbaffc0d.jpg",
                        "mobile_picture_thumbnail_url": "https://media-gobox.s3.amazonaws.com/CACHE/images/customerbox_pictures/demo%40demo.com/test_box__34J3UP/cdv_photo_001/64d579ab1509dbb818da2fb0c33a45aa.jpg",
                        "mobile_picture_max_size_url": "https://media-gobox.s3.amazonaws.com/CACHE/images/customerbox_pictures/demo%40demo.com/test_box__34J3UP/cdv_photo_001/bfd9c16eecb9146b05653ef8916f06d1.jpg",
                        "ordering": 0
                    }
                ]
            },
            {
                "id": 3521,
                "customer": 58,
                "box": 2528,
                "box_name": "-11",
                "box_type": 1,
                "contents": "Sager fra marts 2015\r\n\r\n- Sagsnr: 56543\r\n- Sagsnr: 56343\r\n- Sagsnr: 56462\r\n- Sagsnr: 56764\r\n- Sagsnr: 56532\r\n- Sagsnr: 56232\r\n- Sagsnr: 56823",
                "status": 1,
                "status_text": "In storage",
                "billing_start": "2015-05-28",
                "billing_end": null,
                "base_price": 29,
                "additional_price": 10,
                "admin_url": "/admin/boxes/customerbox/3521/",
                "status_start": "2015-06-01",
                "registered": "2015-05-14T13:47:32Z",
                "pallet": 11,
                "pictures_urls": [
                    {
                        "id": 1146,
                        "customerbox": 3521,
                        "picture": "https://media-gobox.s3.amazonaws.com/customerbox_pictures/demo%40demo.com/-11/GT-Box.png",
                        "desktop_picture_thumbnail_url": "https://media-gobox.s3.amazonaws.com/CACHE/images/customerbox_pictures/demo%40demo.com/-11/GT-Box/06c646756e0197e93edd752642f43f01.jpg",
                        "desktop_picture_max_size_url": "https://media-gobox.s3.amazonaws.com/CACHE/images/customerbox_pictures/demo%40demo.com/-11/GT-Box/4ebdc64d21f590ad6d7198f7c7c08d34.jpg",
                        "mobile_picture_thumbnail_url": "https://media-gobox.s3.amazonaws.com/CACHE/images/customerbox_pictures/demo%40demo.com/-11/GT-Box/50c1c84c82a343a4b9739e816c93c1d2.jpg",
                        "mobile_picture_max_size_url": "https://media-gobox.s3.amazonaws.com/CACHE/images/customerbox_pictures/demo%40demo.com/-11/GT-Box/9f0bb6b0fdb841ae06fb550a0dd423d2.jpg",
                        "ordering": 0
                    }
                ]
            },
            {
                "id": 3460,
                "customer": 58,
                "box": 93,
                "box_name": "-1",
                "box_type": 1,
                "contents": "SkitÃƒÂ¸j",
                "status": 1,
                "status_text": "In storage",
                "billing_start": "2015-05-11",
                "billing_end": null,
                "base_price": 29,
                "additional_price": 10,
                "admin_url": "/admin/boxes/customerbox/3460/",
                "status_start": "2015-07-08",
                "registered": "2015-06-09T10:40:00Z",
                "pallet": 11,
                "pictures_urls": [
                    {
                        "id": 1148,
                        "customerbox": 3460,
                        "picture": "https://media-gobox.s3.amazonaws.com/customerbox_pictures/demo%40demo.com/-1/20150606060815.jpg",
                        "desktop_picture_thumbnail_url": "https://media-gobox.s3.amazonaws.com/CACHE/images/customerbox_pictures/demo%40demo.com/-1/20150606060815/e2ee4cd7180d1c0ff7d6f06f1804aba4.jpg",
                        "desktop_picture_max_size_url": "https://media-gobox.s3.amazonaws.com/CACHE/images/customerbox_pictures/demo%40demo.com/-1/20150606060815/b21ec2a5564456c5ec94ddfbe5b55657.jpg",
                        "mobile_picture_thumbnail_url": "https://media-gobox.s3.amazonaws.com/CACHE/images/customerbox_pictures/demo%40demo.com/-1/20150606060815/051a0a8136adb36b4e6637b98f93d264.jpg",
                        "mobile_picture_max_size_url": "https://media-gobox.s3.amazonaws.com/CACHE/images/customerbox_pictures/demo%40demo.com/-1/20150606060815/4a4e4b68bee24aec76f1ddacd65749e0.jpg",
                        "ordering": 0
                    },
                    {
                        "id": 1145,
                        "customerbox": 3460,
                        "picture": "https://media-gobox.s3.amazonaws.com/customerbox_pictures/demo%40demo.com/-1/GT-Box.png",
                        "desktop_picture_thumbnail_url": "https://media-gobox.s3.amazonaws.com/CACHE/images/customerbox_pictures/demo%40demo.com/-1/GT-Box/8ab920dd7b4fba08449f8c71538e09fb.jpg",
                        "desktop_picture_max_size_url": "https://media-gobox.s3.amazonaws.com/CACHE/images/customerbox_pictures/demo%40demo.com/-1/GT-Box/0359dc1e9b2d94e43929b5d1e3208c28.jpg",
                        "mobile_picture_thumbnail_url": "https://media-gobox.s3.amazonaws.com/CACHE/images/customerbox_pictures/demo%40demo.com/-1/GT-Box/8ca580bef8f6253686d2ac81f54c1a35.jpg",
                        "mobile_picture_max_size_url": "https://media-gobox.s3.amazonaws.com/CACHE/images/customerbox_pictures/demo%40demo.com/-1/GT-Box/e86643dbe2315317f7dc28704299d5b0.jpg",
                        "ordering": 0
                    }
                ]
            },
            {
                "id": 3829,
                "customer": 58,
                "box": 4776,
                "box_name": "test_box__EUJ9UY",
                "box_type": 1,
                "contents": "Hvem ved.",
                "status": 2,
                "status_text": "At customer",
                "billing_start": "2015-06-29",
                "billing_end": null,
                "base_price": 29,
                "additional_price": 10,
                "admin_url": "/admin/boxes/customerbox/3829/",
                "status_start": "2015-06-15",
                "registered": "2015-06-15T14:41:15Z",
                "pallet": null,
                "pictures_urls": [
                    {
                        "id": 1180,
                        "customerbox": 3829,
                        "picture": "https://media-gobox.s3.amazonaws.com/customerbox_pictures/demo%40demo.com/test_box__EUJ9UY/1434379234679.jpg",
                        "desktop_picture_thumbnail_url": "https://media-gobox.s3.amazonaws.com/CACHE/images/customerbox_pictures/demo%40demo.com/test_box__EUJ9UY/1434379234679/83708decef685490e31eb8bf89a88331.jpg",
                        "desktop_picture_max_size_url": "https://media-gobox.s3.amazonaws.com/CACHE/images/customerbox_pictures/demo%40demo.com/test_box__EUJ9UY/1434379234679/a67152f02d8a8e86b4f5e259d085868d.jpg",
                        "mobile_picture_thumbnail_url": "https://media-gobox.s3.amazonaws.com/CACHE/images/customerbox_pictures/demo%40demo.com/test_box__EUJ9UY/1434379234679/6ecfd97e3cc0b6f63e314230e9eac9db.jpg",
                        "mobile_picture_max_size_url": "https://media-gobox.s3.amazonaws.com/CACHE/images/customerbox_pictures/demo%40demo.com/test_box__EUJ9UY/1434379234679/a89e4161080a7af9bbb739f3ea5614db.jpg",
                        "ordering": 0
                    }
                ]
            },
            {
                "id": 3830,
                "customer": 58,
                "box": 4777,
                "box_name": "test_box__CC131F",
                "box_type": 1,
                "contents": "Mange, mange ting.",
                "status": 2,
                "status_text": "At customer",
                "billing_start": "2015-06-29",
                "billing_end": null,
                "base_price": 29,
                "additional_price": 10,
                "admin_url": "/admin/boxes/customerbox/3830/",
                "status_start": "2015-06-15",
                "registered": "2015-06-15T20:10:05Z",
                "pallet": null,
                "pictures_urls": [
                    {
                        "id": 1195,
                        "customerbox": 3830,
                        "picture": "https://media-gobox.s3.amazonaws.com/customerbox_pictures/demo%40demo.com/test_box__CC131F/1434817927880.jpg",
                        "desktop_picture_thumbnail_url": "https://media-gobox.s3.amazonaws.com/CACHE/images/customerbox_pictures/demo%40demo.com/test_box__CC131F/1434817927880/ae33405e76c6ecdface9633dc7e0e7f8.jpg",
                        "desktop_picture_max_size_url": "https://media-gobox.s3.amazonaws.com/CACHE/images/customerbox_pictures/demo%40demo.com/test_box__CC131F/1434817927880/3cd11e88f45629b8cd7c917f6edf9ed7.jpg",
                        "mobile_picture_thumbnail_url": "https://media-gobox.s3.amazonaws.com/CACHE/images/customerbox_pictures/demo%40demo.com/test_box__CC131F/1434817927880/9458f27886841f618d61bd29df00e884.jpg",
                        "mobile_picture_max_size_url": "https://media-gobox.s3.amazonaws.com/CACHE/images/customerbox_pictures/demo%40demo.com/test_box__CC131F/1434817927880/6f9de0b94423bfbde02b737fa5ed4f19.jpg",
                        "ordering": 0
                    }
                ]
            }
        ]));
        localStorage.setItem('person', JSON.stringify(
            [
                {
                    "id":58,
                    "user":{
                        "id":60,
                        "email":"demo@demo.com"
                    },
                    "name":"Demo User",
                    "tlf":"12345678",
                    "address1":"Amagerbrogade 66",
                    "postal_code":"2300",
                    "city":"Kobenhavn S"
                }
            ]
        ));
    }

};