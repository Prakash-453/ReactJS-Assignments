import React from "react";
import { Link, useParams } from "react-router-dom";
function Moviess() {
  const name = [
    {
      id: "1",
      name: "tom and jerry",
      cast: ["acctor", " Action Drama", "all are heros "],
      image:
        "https://www.bing.com/images/search?view=detailV2&ccid=KxUtABZC&id=2F3855D4ACC4C510A289BAF22C478088C627AA0E&thid=OIP.KxUtABZCawEDr5eLnyLSvAHaFj&mediaurl=https%3A%2F%2Fimages-na.ssl-images-amazon.com%2Fimages%2FS%2Fpv-target-images%2Fb13b5087bd1f2c83f256d68fd175a4e19c655e1f933c2e73f4675045fc8cf01a.RI_TTW.jpg&exph=3240&expw=4320&q=tom+and+jerry&simid=608005570069024708&FORM=IRPRST&ck=851D49566464A76B89919BB546B0D3FE&selectedIndex=1&itb=0&cw=1382&ch=668&ajaxhist=0&ajaxserp=0",
    },
    {
      id: "2",
      name: "KA",
      cast: ["kiran", "new director", "Dsp"],
      image:
        "https://www.bing.com/images/search?view=detailV2&ccid=NLYbhXkw&id=7CF2A3A7ADF3788709F336072DE4DBC937B704FA&thid=OIP.NLYbhXkwT8FhHSVtj0l7KAHaEK&mediaurl=https%3A%2F%2Fimgeng.jagran.com%2Fimages%2F2024%2F11%2F01%2Farticle%2Fimage%2Fka-movie-twitter-review-1730446228216.webp&exph=675&expw=1200&q=ka+movie+review&simid=608046982145995295&FORM=IRPRST&ck=237813DA25F0BFD288C783AB1252E476&selectedIndex=2&itb=0&cw=1382&ch=668&ajaxhist=0&ajaxserp=0",
    },

    {
      id: "3",
      name: "OG",
      cast: ["pspk", "sujith", "raja"],
      image:
        "https://www.bing.com/images/search?view=detailV2&ccid=95HWiYov&id=040810C271F18976582CCB58FEF6D966AB0348EC&thid=OIP.95HWiYov7sj9G4bprrSJngHaEc&mediaurl=https%3A%2F%2Fwww.newstap.in%2Fh-upload%2F2023%2F04%2F15%2F1491621-og.jpg&exph=900&expw=1500&q=og&simid=607997396726471659&FORM=IRPRST&ck=9CA6F0C6545981FE8E588079C2746E70&selectedIndex=8&itb=0&cw=1382&ch=668&ajaxhist=0&ajaxserp=0",
    },
    {
      id: "4",
      name: "BEN 10",
      cast: ["acctor", " Action Drama", "all are heros "],
      image:
        "https://www.themoviedb.org/t/p/original/v5hLUEpbn3G3oLXLdF7lFikDivb.jpg",
    },
  ];

  const { id } = useParams();
  //  const two= name.find((a,b)=>a.id=== id)
  if (!name) {
    return <h1>movie not found</h1>;
  }
  return (
    <div>
      <h3> {id}</h3>
     
    </div>
  );
}
export default Moviess;