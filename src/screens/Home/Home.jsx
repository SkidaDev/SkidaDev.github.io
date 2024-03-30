import React from "react";
import { Group } from "../../components/Group";
import { Image1 } from "../../icons/Image1";
import "./style.css";

export const Home = () => {
  return (
    <div className="home">
      <div className="div-2">
        <div className="overlap">
          <div className="overlap-2">
            <p className="text-wrapper">And I’ve got something cool to show you.</p>
            <div className="hey-i-m-grumpr">
              hey!
              <br />
              I’m Grumpr
            </div>
            <Image1 className="image" />
            <Image1 className="image" />
            <div className="group-2">
              <div className="rectangle-2" />
              <div className="rectangle-3" />
              <div className="rectangle-4" />
              <div className="rectangle-5" />
              <div className="rectangle-6" />
            </div>
            <div className="group-3">
              <div className="overlap-group-wrapper">
                <div className="overlap-group-2">
                  <div className="rectangle-7" />
                  <div className="rectangle-8" />
                </div>
              </div>
              <div className="overlap-wrapper">
                <div className="overlap-group-2">
                  <div className="rectangle-7" />
                  <div className="rectangle-8" />
                </div>
              </div>
              <div className="div-wrapper">
                <div className="overlap-group-2">
                  <div className="rectangle-7" />
                  <div className="rectangle-8" />
                </div>
              </div>
            </div>
            <div className="grumpr-lol-wrapper">
              <img className="grumpr-lol" alt="Grumpr lol" src="/img/grumpr-lol-1.png" />
            </div>
          </div>
          <Group className="group-5" href="http://gg.gg/19rzku" property1="default" text="&gt;Youtube" />
        </div>
        <div className="overlap-3">
          <div className="overlap-4">
            <div className="wave-SVG">
              <div className="overlap-group-3">
                <img className="vector" alt="Vector" src="/img/vector-2.svg" />
                <img className="vector" alt="Vector" src="/img/vector-3.svg" />
                <img className="vector" alt="Vector" src="/img/vector-4.svg" />
                <img className="vector" alt="Vector" src="/img/vector-5.svg" />
                <img className="vector" alt="Vector" src="/img/vector-6.svg" />
                <img className="img" alt="Vector" src="/img/vector-7.svg" />
                <img className="vector-2" alt="Vector" src="/img/vector-8.svg" />
                <img className="giving-info" alt="Giving info" src="/img/giving-info-1.png" />
              </div>
            </div>
            <div className="text-wrapper-2">Discord: Skidadle#87632</div>
            <div className="email-grumprguy">
              <br />
              Email: Grumprguy@outlook.com
            </div>
            <div className="group-4">
              <p className="p">
                Over the years, I’ve accumulated the skills to play numerous instruments.. First I learned the piano,
                which had to be removed. Then the saxophone, which I still play and enjoy, and last but not least, the
                ukulele, my favourite instrument by far. I also have 2 songs that I made in 30 minutes or less on my
                youtube channel, if you want to check them out.
              </p>
              <div className="text-wrapper-3">Music</div>
            </div>
            <div className="group-6">
              <p className="apart-from-all-of">
                Apart from all of the above, I love exploring linux, an operating system created by Linus Torvalds. I’m
                working on an indie game called ‘Working Forever’ and my UI &amp; UX skills. Sometimes I’ll also
                practice typing (Sounds mundane, I know) for fun. Sometimes I’ll even make a replay shot, or, perhaps,
                if I’m not busy with other things, upload a video! *collective gasp*
              </p>
              <div className="text-wrapper-3">Other things I do</div>
            </div>
            <img className="playing-music" alt="Playing music" src="/img/playing-music-1.png" />
            <div className="text-wrapper-4">where to find me</div>
            <img className="demonstration" alt="Demonstration" src="/img/demonstration-1.png" />
          </div>
          <div className="overlap-5">
            <p className="text-wrapper-5">
              I’m Grumpr. (ɡrʌmp.ər), a Minecraft content creator based in Canada. At any given time, I’m probably
              making something. Perhaps it’s because I have (too) many hobbies that I’m occupied with at pretty much all
              times. I’ll list some here, and if you’re interested, feel free to DM me.
            </p>
            <img className="doing-redstone" alt="Doing redstone" src="/img/doing-redstone-1.png" />
          </div>
          <div className="group-7">
            <p className="p">
              I’ve edited hundreds of videos throughout the years. Some for myself, some for my other channels, and
              other people. Additionally, I enjoy making little designs, whether it be a poster, a thumbnail, or perhaps
              even a friend’s profile picture, if I’m breathing, there’s a 1 in 3 chance I’m doing this sort of stuff
            </p>
            <p className="text-wrapper-3">Video Editing and graphic design</p>
          </div>
        </div>
        <div className="who-am-i">who am&nbsp;&nbsp;I?</div>
      </div>
    </div>
  );
};
