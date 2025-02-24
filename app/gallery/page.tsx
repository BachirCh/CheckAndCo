import Image from "next/image";

const galleries = [
  {
    date: "19/02/2025",
    title: "From Idea To Solution",
    images: [
      "https://media.licdn.com/dms/image/v2/D4E22AQFlNPJU32TZ0w/feedshare-shrink_1280/B4EZUhU.w_GwAo-/0/1740020909804?e=1743033600&v=beta&t=RKhYErIlsvpjFp22f5BnxbQEbYkAHp2zjaspkROXYnY",
      "https://media.licdn.com/dms/image/v2/D4E22AQGnLzaCPMI7Ng/feedshare-shrink_1280/B4EZUhU.0MHUAo-/0/1740020916307?e=1743033600&v=beta&t=BCNx7r27vSvjaB638iri_lpC850ZktHYfEbuodxirlc",
      "https://media.licdn.com/dms/image/v2/D4E22AQHZuT_ib3xt8g/feedshare-shrink_1280/B4EZUhU.yDGgAk-/0/1740020914221?e=1743033600&v=beta&t=8JVaIeUcnQOFN41gvxt0IMirQ8iNN0cLsHg-irJu-eU",
      "https://media.licdn.com/dms/image/v2/D4E22AQHgM2nA8XYhqg/feedshare-shrink_1280/B4EZUhU.xoHUAk-/0/1740020917297?e=1743033600&v=beta&t=MhhX7ELvWkuVuxZrzzcIXiXHDqTEvA2iyKJ1IK2nams",
      "https://media.licdn.com/dms/image/v2/D4E22AQEz0FevZo_mmQ/feedshare-shrink_1280/B4EZUhU.yUGwAk-/0/1740020914183?e=1743033600&v=beta&t=4gW7E-_LvCmdrqIXhIiu9KwLtFn9Mxo3rxQRWqfKXcs",
      "https://media.licdn.com/dms/image/v2/D4E22AQH5VTDLwjQ3DQ/feedshare-shrink_1280/B4EZUhU.wgH0Ak-/0/1740020915655?e=1743033600&v=beta&t=rtg8PiyFKSycBmKdZChyJpNI3qFRWRLoMm50LlejU6s",
      "https://media.licdn.com/dms/image/v2/D4E22AQFh0ZZY-sav8g/feedshare-shrink_1280/B4EZUhU.1hGgAk-/0/1740020918351?e=1743033600&v=beta&t=nCBzFsyz91a2LutZRrRdsl-eijWPRzzq0nQ-96kb2OE",
      "https://media.licdn.com/dms/image/v2/D4E22AQH1EXeGCkYlxg/feedshare-shrink_1280/B4EZUhU.wXHMAo-/0/1740020911221?e=1743033600&v=beta&t=I5A5X6fTvHLylv-dlplUuLSrpQ3hjgL483_51kC2bVI",
      "https://media.licdn.com/dms/image/v2/D4E22AQHEX02A36bUnA/feedshare-shrink_1280/B4EZUhU.yAG0As-/0/1740020916002?e=1743033600&v=beta&t=0t6zJMFM-Cu-U61HWI3v7b9BtDl3Mw4E95BvAwo2prE",
      "https://media.licdn.com/dms/image/v2/D4E22AQGb18Q9MIfnDw/feedshare-shrink_1280/B4EZUhU.x8H0Ak-/0/1740020912523?e=1743033600&v=beta&t=BKYrqq3L9bXbHhc72BEx3gowRF8SjZE9J6woeuGYpYY",
      "https://media.licdn.com/dms/image/v2/D4E22AQH8l1GPBG8dOw/feedshare-shrink_1280/B4EZUhU.xHGgAk-/0/1740020917887?e=1743033600&v=beta&t=9YylFtutmQdMbdQ93518ygYsRyZ254bOLRFeOiXjZW0",
      "https://media.licdn.com/dms/image/v2/D4E22AQG76ojVP2IYQQ/feedshare-shrink_1280/B4EZUhU.yEHcAk-/0/1740020912282?e=1743033600&v=beta&t=lOaTMBRSVh6FfAwe8WY425-BTTU-bZ9JqjHbc6cNm9g"
      // more images
    ],
  },
  {
    date: "12/02/2025",
    title: "Tech Innovations",
    images: [
      "https://media.licdn.com/dms/image/v2/D4E22AQHehDrvfKNa7w/feedshare-shrink_1280/B4EZT9xubwH0Ak-/0/1739424466814?e=1743033600&v=beta&t=EaTzqFmc6bn5410hr62epFK_1aZsFm3o0fBFv0Q3N8M",
      "https://media.licdn.com/dms/image/v2/D4E22AQFoOER84lIUgw/feedshare-shrink_1280/B4EZT9xueiGYAk-/0/1739424470996?e=1743033600&v=beta&t=00XYiugJeH8p4dR_Qm6P4ysgf8vCLPD7mqclWBMPFpI",
      "https://media.licdn.com/dms/image/v2/D4E22AQFpY8yJRLJOBQ/feedshare-shrink_1280/B4EZT9xub4HcAk-/0/1739424473970?e=1743033600&v=beta&t=5M1w01DbYluwgfnq2zYx93Xkbqgt90OuQc5fm3N_YPc",
      "https://media.licdn.com/dms/image/v2/D4E22AQEQ6wjWw7M9yw/feedshare-shrink_1280/B4EZT9xudNGwAk-/0/1739424475239?e=1743033600&v=beta&t=rvt66DU0Scs1Xed--dX3SveNt7xRzFC9Gz_-StSKYeI",
      "https://media.licdn.com/dms/image/v2/D4E22AQGUS8iPWgV-1w/feedshare-shrink_1280/B4EZT9xucLG0Ak-/0/1739424468845?e=1743033600&v=beta&t=faAgiCj7oyJp1wgpetqGjxY062RGcqJyf6cj63R56OA",
      "https://media.licdn.com/dms/image/v2/D4E22AQFjqKkA8o6RHw/feedshare-shrink_2048_1536/B4EZT9xudYGwAo-/0/1739424473052?e=1743033600&v=beta&t=aD_5677cBu24w764OqvGycLM5nVgBv8WqKQgLGmHCpE",
      "https://media.licdn.com/dms/image/v2/D4E22AQHHt-xrCYVvYA/feedshare-shrink_1280/B4EZT9xucIGgAs-/0/1739424475834?e=1743033600&v=beta&t=4zabRslIYsA8cA8IcerQ5rX7Mw-961xZUsdayQn6RMc",
      "https://media.licdn.com/dms/image/v2/D4E22AQG_SZ0hO8TVTA/feedshare-shrink_2048_1536/B4EZT9xuc6HUAo-/0/1739424476475?e=1743033600&v=beta&t=Nv-O9EpsmpNjhvO_2Rrnz--1ossYVYGZ6tujZuz96jQ",
      // more images
    ],
  },
  {
    date: "05/02/2025",
    title: "Chess Tournament",
    images: [
      "https://media.licdn.com/dms/image/v2/D5622AQF6k6jIiCFrkw/feedshare-shrink_1280/B56ZTZTvjSGoAo-/0/1738812621935?e=1743033600&v=beta&t=wutjKxO5Br1FFCz-Hqn-nSaFZDiZYlD6cYQSmeH4ztg",
      "https://media.licdn.com/dms/image/v2/D5622AQFwj1Cq8wtWlw/feedshare-shrink_2048_1536/B56ZTZTvjVHEAs-/0/1738812632771?e=1743033600&v=beta&t=qJRgEQIZ79Ow_LfiA0X9LlWUuAdp_l3ujFP352fDZNY",
      "https://media.licdn.com/dms/image/v2/D5622AQGJlPMbkfWg_Q/feedshare-shrink_1280/B56ZTZTvjyHoAk-/0/1738812630206?e=1743033600&v=beta&t=0dK0k6fQq2KQsdsibL-rPI3TCu55uvJcI2BGVAPbZC4",
      "https://media.licdn.com/dms/image/v2/D5622AQEyIEhY2_UmsA/feedshare-shrink_1280/B56ZTZTvjqHoAo-/0/1738812630120?e=1743033600&v=beta&t=oetnp9up0algo8yVQO_SqowRE3RNCSXHaYomXLQh9wk",
      "https://media.licdn.com/dms/image/v2/D5622AQHZ7pxVMGggFA/feedshare-shrink_1280/B56ZTZTvjYGoAk-/0/1738812634875?e=1743033600&v=beta&t=ADy8IVVfP8wdEZU3xQeRQr04cru00Bqs7-jo_27LDp4",
      "https://media.licdn.com/dms/image/v2/D5622AQGKf-686moukA/feedshare-shrink_1280/B56ZTZTvjeGQAk-/0/1738812629663?e=1743033600&v=beta&t=xKnk5spFp8CU-SuNQ4NJidp4ogjs7s_Uvc8pfw37dhk",
      "https://media.licdn.com/dms/image/v2/D5622AQFaMLaRjSYmKg/feedshare-shrink_1280/B56ZTZTvjrHQAk-/0/1738812639166?e=1743033600&v=beta&t=si30WMBlimtl3O5VKKwCYcNZhLdTgdT3lzBooNc2aW8",
      // more images
    ],
  },
  {
    date: "29/01/2025",
    title: "World of AI Tools",
    images: [
      "https://media.licdn.com/dms/image/v2/D4E22AQGPsCejCT3agA/feedshare-shrink_1280/B4EZS1UXwhHUAk-/0/1738208813374?e=1743033600&v=beta&t=IXqWFzBYjMeE2WpGSg5Q837rR4Kfse9V20nxfS8B4no",
      "https://media.licdn.com/dms/image/v2/D4E22AQEhvJPnevoXKQ/feedshare-shrink_1280/B4EZS1UXwfHoAk-/0/1738208812171?e=1743033600&v=beta&t=F_CdhGV8vIBiQFxWqcDMaqn31Q5yGjLgN6B67M_OqbY",
      "https://media.licdn.com/dms/image/v2/D4E22AQGpvHPJgz78eQ/feedshare-shrink_1280/B4EZS1UXw7GYAk-/0/1738208811738?e=1743033600&v=beta&t=bGKxZP-X0Rb6NZ86Ytf2LGzFQTO5jBWggq-Ei2XtT8E",
      "https://media.licdn.com/dms/image/v2/D4E22AQEAnbrqQB4b3Q/feedshare-shrink_1280/B4EZS1UXvjGYAk-/0/1738208810580?e=1743033600&v=beta&t=l-BNTG5wa4YHOr9mCNAyFluv-TuwpdLex0j0vnfMnK4",
      "https://media.licdn.com/dms/image/v2/D4E22AQGNF7TBe3sPTg/feedshare-shrink_1280/B4EZS1UXxVHcAs-/0/1738208815908?e=1743033600&v=beta&t=vUDbAS-obrgMVQVE610mICyrbEA8BmTFCzEY_plZfuk",
      "https://media.licdn.com/dms/image/v2/D4E22AQFCK8b6PIdAUA/feedshare-shrink_1280/B4EZS1UXxtHcAk-/0/1738208813921?e=1743033600&v=beta&t=JvJPIGh6QD6wnH6GKPUM8EhNO7UAL6BuJezyPa-tjx4",
      "https://media.licdn.com/dms/image/v2/D4E22AQFCPQu6NaUlwA/feedshare-shrink_1280/B4EZS1UXxQG0Ak-/0/1738208813094?e=1743033600&v=beta&t=x08cc6hV-o2PCK1dqse0OvUnf6xOTLyNH6tgjym2LYM",
      "https://media.licdn.com/dms/image/v2/D4E22AQFOro2lqiXtUA/feedshare-shrink_1280/B4EZS1UXw5GwAo-/0/1738208818406?e=1743033600&v=beta&t=R0oKRu4fngdOAvXZU_HtgiR9JPm83Ld4pN-mCNUfLXo",
      // more images
    ],
  },
  {
    date: "22/01/2025",
    title: "Design Sprint",
    images: [
      "https://media.licdn.com/dms/image/v2/D5622AQHupppG1_knFA/feedshare-shrink_1280/B56ZSRGHbLHEAk-/0/1737601096200?e=1743033600&v=beta&t=ao6_tVJU9_hL9QpXM3nAljOTJrmq0Pw5hYJC5-hcld4",
      "https://media.licdn.com/dms/image/v2/D5622AQGmd8c8RxFPYA/feedshare-shrink_1280/B56ZSRGHaXGQAo-/0/1737601095482?e=1743033600&v=beta&t=VcSdqsXC0VazR1hNjrc94jKzZGNKn8YjzHybKDnwEiw",
      "https://media.licdn.com/dms/image/v2/D5622AQHFQsfIAZ52IA/feedshare-shrink_1280/B56ZSRGHblGsAk-/0/1737601094742?e=1743033600&v=beta&t=OFPsV5wD1kYYRiM8SWK4_0HxWEwNMmUOWIPosyG4buY",
      "https://media.licdn.com/dms/image/v2/D5622AQFA9N99bqoRJw/feedshare-shrink_1280/B56ZSRGHbLGsAo-/0/1737601094408?e=1743033600&v=beta&t=pUMA-qyUFOc8JsGgOw5TJB8QkqeydLY713QD18yq2bA",
      "https://media.licdn.com/dms/image/v2/D5622AQEWesCF--w0jg/feedshare-shrink_1280/B56ZSRGHbiHQAo-/0/1737601093424?e=1743033600&v=beta&t=_K82XFXT8DOYOGME50Yx51La6Yje01iGNVxzc5Wrx9M",
      // more images
    ],
  },
  // More galleries
];

export default function Gallery() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Gallery</h1>
      {galleries.map((gallery, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{gallery.date} - {gallery.title}</h2>
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
            {gallery.images.map((image, imgIndex) => (
              <div key={imgIndex} className="relative mb-4 break-inside-avoid">
                <div className="relative overflow-hidden rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`Gallery image ${imgIndex + 1}`}
                    width={300}
                    height={300}
                    layout="responsive"
                    data-aos="fade-up"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
