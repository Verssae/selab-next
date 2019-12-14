import { useState } from "react"
import { All, ImageBox, Image, Nav, NavAnchor } from "../components/pages/publication_gallery"
import CustomHeader from "../components/CustomHeader"
import Layout from "../components/Layout"

const Photo = ({ path, title }) => (
  <Image>
    <a href={path} title={title}>
      <img src={path} alt={title} />
    </a>
    {title}
  </Image>
)

const NavOption = ({ number, onClick, content, children }) => (
  <NavAnchor onClick={() => onClick(number)} isCurrent={number === content}>
    {children}
  </NavAnchor>
)

const Gallery = ({ data }) => {
  const [content, setContent] = useState(0)
  console.log(data)
  return (
    <Layout>
      <CustomHeader />
      <All>
        <Nav>
          <NavOption number={0} onClick={setContent} content={content}>
            Social-Activity
          </NavOption>
          <NavOption number={1} onClick={setContent} content={content}>
            Conference
          </NavOption>
          <NavOption number={2} onClick={setContent} content={content}>
            Etc
          </NavOption>
        </Nav>
        <ImageBox>
          {data[content].map(({ path, title }, id) => (
            <Photo key={id} path={path} title={title} />
          ))}
        </ImageBox>
      </All>
    </Layout>
  )
}

Gallery.getInitialProps = (props) => {
  console.log(props)
  const social_activity = [
    { path: "social_activity/2016-07-25_12_25_28.jpg", title: "회식" },
    { path: "social_activity/2016-07-28_14_48_46.jpg", title: "일상" },
    {
      path: "social_activity/KakaoTalk_20161013_161859066.jpg",
      title: "Gayeon's Birthday"
    },
    {
      path: "social_activity/KakaoTalk_20161103_200248538.jpg",
      title: "Lab Dinner November 2016"
    },
    { path: "social_activity/20160303_122313.jpg", title: "SELAB-Lunch" },
    { path: "social_activity/20151217_144926.jpg", title: "KCC Winter 2015" },
    {
      path: "social_activity/KakaoTalk_20151218_131111742.jpg",

      title: "KCC Winter 2015"
    },
    {
      path: "social_activity/20151217_125809.jpg",
      title: "KCC WINTER Conference 2015-Lunch"
    },
    {
      path: "social_activity/KakaoTalk_Photo_2016-07-07-17-07-51.jpeg",
      title: "SeonWoong Birthday"
    },
    {
      path: "social_activity/KakaoTalk_Photo_2016-07-07-17-07-46.jpeg",
      title: "Lab Lunch"
    },
    {
      path: "social_activity/KakaoTalk_20150913_214113133.jpg",
      title: "Lab Lunch (14 September 2015)"
    },
    { path: "social_activity/image.jpg", title: "Lab Lunch" },
    {
      path: "social_activity/Bandphoto_2014_05_14_13_31_06.jpg",
      title: "Beer with Chips and People :-)"
    },
    { path: "social_activity/IMG_7602.jpg", title: "호수공원" },
    {
      path: "social_activity/IMG_7584.jpg",
      title: "Plz, arrest him!!!! Crazy guy on the Lio"
    },
    { path: "social_activity/IMG_7586.jpg", title: "All mems infront of the" },
    {
      path: "social_activity/KakaoTalk_3f852c70fb6f4ca3.jpg",
      title: "Happt Birthday!! :-)"
    },
    { path: "social_activity/IMG_1164.jpg", title: "Dinner February 2014" },
    {
      path: "social_activity/IMG_1716.jpg",
      title: "뭐가 그리 좋을꼬?? 누가 그리 좋을꼬? ㅋㅋ"
    },
    { path: "social_activity/IMG_2197.jpg", title: "회식" },
    {
      path: "social_activity/IMG_2335.jpg",
      title: "나는 지금 총을 쏘는게 아니야!!!"
    }
  ]
  const conference = [
    { path: "conference/KakaoTalk_20170113_125937985.jpg", title: "KSCI 2017" },
    { path: "conference/KakaoTalk_20170113_125748315.jpg", title: "KSCI 2017" },
    { path: "conference/KakaoTalk_20170113_125722733.jpg", title: "KSCI 2017" },
    { path: "conference/20161221_131538-1.jpg", title: "ICCCA 2016 Busan" },
    { path: "conference/2015-12-20_17_39_26.jpg", title: "KCC" },
    {
      path: "conference/KakaoTalk_20160714_200728318.jpg",
      title: "ICISCA Conference 16 July 2016 Thailand"
    },
    {
      path: "conference/DSC_0093.jpg",
      title: "KCC Winter 2015-Rahim Presenting Paper"
    },
    { path: "conference/DSC_0114.jpg", title: "KCC Winter 2015" },
    { path: "conference/DSC_0081.jpg", title: "KCC Winter 2015-Zhiqiang" },
    {
      path: "conference/KakaoTalk_20150701_002505992.jpg",
      title: "KCC 2015 Seonwoong"
    },
    {
      path: "conference/KakaoTalk_20150701_002517046.jpg",
      title: "KCC 2015 Seonwoong"
    },
    {
      path: "conference/KakaoTalk_20150701_002517777.jpg",
      title: "KCC 2015 Seonwoong"
    },
    { path: "conference/img2.jpeg", title: "KCC 2015 Asad" },
    { path: "conference/img.jpeg", title: "KCC 2015 Asad and Isma" },
    { path: "conference/IMG_4923.jpg", title: "KCSE 2014 presentation" },
    { path: "conference/IMG_4772.jpg", title: "KCSE 2014 presentation" },
    { path: "conference/IMG_1109.jpg", title: "KCSE 2014 Pheonix Park" },
    { path: "conference/20130628_121831.jpg", title: "공허함의 끝은 발표" },
    { path: "conference/jaejin.png", title: "졸업생의 비애" },
    { path: "conference/IMG_1794.jpg", title: "종합학술대회(여수)" }
  ]
  const etc = [
    { path: "etc/1421654364774.jpeg", title: "Happy Birthday Prof!" },
    { path: "etc/20160707_173320.jpg", title: "Happy Birthday Prof!Twins-2" },
    { path: "etc/20160504_174227.jpg", title: "Twins Birthday" },
    {
      path: "etc/KakaoTalk_20140513_124247945.jpg",
      title: "흠 절대 누구라고는 말 안했음…. Who are you?"
    },
    {
      path: "etc/20130628_121943.jpg",
      title: "Happy Birthday Prof!숨막히는 뒷태~~~ 우후훗"
    }
  ]

  return {
    data: [social_activity, conference, etc]
  }
}

export default Gallery
