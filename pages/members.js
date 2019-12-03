import { useState } from "react"
import { Contents, Prof, Subject, P_info, Name, Career, Nav, NavP, Pupils, Research_interests, Members_section, Member } from "../components/pages/members"
import CustomHeader from "../components/CustomHeader"
import Layout from "../components/Layout"

const NavOption = ({ number, onClick, section, children }) => (
  <NavP onClick={() => onClick(number)} isCurrent={number === section}>
    {children}
  </NavP>
)

const Members = () => {

  const [section, setSection] = useState(0)

  const Ph_D = (
    <Members_section>
      <Member>
        <img src="members/ph.D/isma.jpg" alt="isma" />
        <P_info>
          <ul>
            <Name>Isma Farah</Name>
            <li>isma2012@hanyang.ac.kr</li>
            <li><a href="http://www.linkedin.com/in/ismafarah">http://www.linkedin.com/in/ismafarah</a></li>
            <li>PhD scholar From Pakistan on HEC Scholarship</li>
          </ul>
        </P_info>
        <Research_interests>
          <p>Research_interests</p>
          <ul>
            <li>Software Engineering</li>
            <li>Web Applications</li>
            <li>Semantic Web</li>
            <li>Database Management</li>
            <li>Formal Methods</li>
          </ul>
        </Research_interests>
      </Member>
      <Member>
        <img src="members/ph.D/photo_(1).jpg" alt="abdul" />
        <P_info>
          <ul>
            <Name>Abdul Rahim</Name>
            <li>rahim750413@hanyang.ac.kr</li>
            <li><a href="https://www.facebook.com/abdul.ariffin">https://www.facebook.com/abdul.ariffin</a></li>
            <li>Master's leading to Phd scholar from Kuala Lumpur,Malaysia</li>
          </ul>
        </P_info>
        <Research_interests>
          <p>Research_interests</p>
          <ul>
            <li>Software Engineering</li>
            <li>- Hadoop(MapReduce)</li>
            <li>- Multithreading</li>
          </ul>
        </Research_interests>
      </Member>
      <Member>
        <img src="members/ph.D/Untitled.jpg" alt="asad" />
        <P_info>
          <ul>
            <Name>Asad Abbas</Name>
            <li>asadabbas@hanyang.ac.kr</li>
            <li></li>
            <li>HEC Pakistan Scholar MS leading to PhD
            From Pakistan</li>
          </ul>
        </P_info>
        <Research_interests>
          <p>Research_interests</p>
          <ul>
            <li>Software Engineering</li>
            <li>- Product Line Software Engineering</li>
          </ul>
        </Research_interests>
      </Member>
      <Member>
        <img src="members/ph.D/gichan.jpg" alt="Gichan Lee" />
        <P_info>
          <ul>
            <Name>Asad Abbas</Name>
            <li>fantasyopy@gmail.com</li>
            <li><a href="https://www.linkedin.com/in/GCSELAB">https://www.linkedin.com/in/GCSELAB</a></li>
            <li>2016-2 ~
            M.E. to Ph.D.</li>
          </ul>
        </P_info>
        <Research_interests>
          <p>Research_interests</p>
          <ul>
            <li>Software Engineering in practice</li>
            <li>Access Control in IoT environment(project)</li>
          </ul>
        </Research_interests>
      </Member>
      <Member>
        <img src="members/ph.D/mohsin.jpg" alt="Mohsin Javaid" />
        <P_info>
          <ul>
            <Name>Mohsin Javaid</Name>
            <li>mohsinjavaid@hanyang.ac.kr</li>
            <li><a href="https://goo.gl/3QXH6k">https://goo.gl/3QXH6k</a></li>
            <li>Ph.D. Scholar from Pakistan on HEC Scholarship.</li>
          </ul>
        </P_info>
        <Research_interests>
          <p>Research_interests</p>
          <ul>
            <li>Software Engineering</li>
            <li>Model Driven Architecture</li>
            <li>Internet of Things</li>
            <li>Android Application</li>
            <li>Requirement Engineering</li>
          </ul>
        </Research_interests>
      </Member>
      <Member>
        <img src="members/ph.D/khan.jpg" alt="khan" />
        <P_info>
          <ul>
            <Name>Muhammad Umair Khan</Name>
            <li>mumairkhan@hanyang.ac.kr</li>
            <li><a href="https://goo.gl/GdYteF">https://goo.gl/GdYteF</a></li>
            <li>Ph.D. Scholar from Pakistan on HEC scholarship</li>
          </ul>
        </P_info>
        <Research_interests>
        <p>Research_interests</p>
          <ul>
            <li>Software Engineering</li>
            <li>Concurrent Programming</li>
            <li>Internet of Thing</li>
          </ul>
        </Research_interests>
      </Member>
    </Members_section>
  )
  const Me = (
    <Members_section>
      <Member>
        <img src="members/M.E/11.jpg" alt="gayeon" />
        <P_info>
          <ul>
            <Name>Gayeon Kim</Name>
            <li>gayeonkim91@gmail.com</li>
            <li><a href=""></a></li>
            <li>Hi</li>
          </ul>
        </P_info>
        <Research_interests>
          <p>Research_interests</p>
          <ul>
            <li>Software Engineering</li>
            <li>Web Applications</li>
            <li>Bigdata analysis</li>
          </ul>
        </Research_interests>
      </Member>
      <Member>
        <img src="members/M.E/" alt="no_photo" />
        <P_info>
          <ul>
            <Name>Seonwoong Kim</Name>
            <li>oung123@hanmail.net</li>
            <li><a href="">none</a></li>
            <li>Wussup</li>
          </ul>
        </P_info>
        <Research_interests>
          <p>Research_interests</p>
          <ul>
            <li>Software Engineering</li>
            <li>Model Checking</li>
            <li>Swift2</li>
          </ul>
        </Research_interests>
      </Member>
      <Member>
        <img src="members/M.E/325115318014822206.jpg" alt="wu" />
        <P_info>
          <ul>
            <Name>Wu Zhiqiang</Name>
            <li>hhhwwwuuu@hanyang.ac.kr</li>
            <li></li>
            <li>-</li>
          </ul>
        </P_info>
        <Research_interests>
          <p>Research_interests</p>
          <ul>
            <li>Software Engineering</li>
            <li>- Concurrency Detection</li>
            <li>- Malware Detection</li>
          </ul>
        </Research_interests>
      </Member>
      <Member>
        <img src="members/M.E/gif.gif" alt="gwanggyu" />
        <P_info>
          <ul>
            <Name>Gwanggye Choi</Name>
            <li>gcahmoei@hanyang.ac.kr</li>
            <li><a href="">.</a></li>
            <li>.</li>
          </ul>
        </P_info>
        <Research_interests>
          <p>Research_interests</p>
          <ul>
            <li>Software engineering</li>
            <li>- requirement engineering</li>
          </ul>
        </Research_interests>
      </Member>
      <Member>
        <img src="members/M.E/140x175.jpg" alt="hyunglak" />
        <P_info>
          <ul>
            <Name>Hyunglak Kim</Name>
            <li>jikuaij@gmail.com</li>
            <li><a href=""></a></li>
            <li>Hi</li>
          </ul>
        </P_info>
        <Research_interests>
          <p>Research_interests</p>
          <ul>
            <li>Software Engineering</li>
            <li>- Crowdsourcing Software Develop</li>
            <li>- Android Application</li>
            <li>- Model Checking</li>
          </ul>
        </Research_interests>
      </Member>
      <Member>
        <img src="members/M.E/" alt="no_photo" />
        <P_info>
          <ul>
            <Name>Youn Guen Ahn</Name>
            <li>frebern@naver.com</li>
            <li><a href="http://frebern.xyz">http://frebern.xyz</a></li>
            <li>TBA</li>
          </ul>
        </P_info>
        <Research_interests>
        <p>Research_interests</p>
          <ul>
            <li>Java, Android</li>
          </ul>
        </Research_interests>
      </Member>
      <Member>
        <img src="members/M.E/" alt="no_photo" />
        <P_info>
          <ul>
            <Name>Kyojune Hwang</Name>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </P_info>
        <Research_interests>
        <p>Research_interests</p>
          <ul>
          </ul>
        </Research_interests>
      </Member>
      <Member>
        <img src="members/M.E/" alt="no_photo" />
        <P_info>
          <ul>
            <Name>Hakjin Lee</Name>
            <li>gsdjini91@gmail.com</li>
            <li></li>
            <li></li>
          </ul>
        </P_info>
        <Research_interests>
        <p>Research_interests</p>
          <ul>
            <li>Smell Detection</li>
            <li>Refactoring</li>
            <li>Game QA</li>
          </ul>
        </Research_interests>
      </Member>
    </Members_section>
  )
  const Intern = (
    <Members_section>
      <Member>
        <img src="members/Intern/CAM00259.jpg" alt="dahae" />
        <P_info>
          <ul>
            <Name>Dahae Sung</Name>
            <li>sdh4513136@hanmail.net</li>
            <li></li>
            <li>:)</li>
          </ul>
        </P_info>
        <Research_interests>
          <p>Research_interests</p>
          <ul>
            <li></li>
          </ul>
        </Research_interests>
      </Member>
      <Member>
        <img src="members/Intern" alt="no_photo" />
        <P_info>
          <ul>
            <Name>Yongtaek Oh</Name>
            <li>ka123ak1@gmail.com</li>
            <li></li>
            <li></li>
          </ul>
        </P_info>
        <Research_interests>
          <p>Research_interests</p>
          <ul>
            <li>IoT</li>
          </ul>
        </Research_interests>
      </Member>
      <Member>
        <img src="members/Intern" alt="no_photo" />
        <P_info>
          <ul>
            <Name>Namju Park</Name>
            <li>qkrska66@hanyang.ac.kr</li>
            <li></li>
            <li></li>
          </ul>
        </P_info>
        <Research_interests>
          <p>Research_interests</p>
          <ul>
            <li></li>
          </ul>
        </Research_interests>
      </Member>
    </Members_section>
  )
  const Alumni = (
    <Members_section>
      <Member>
        <img src="members/Alumni" alt="no_photo" />
        <P_info>
          <ul>
            <Name>Jaejin Kim</Name>
            <li>jaejinkim@hanyang.ac.kr</li>
            <li><a href="https://www.facebook.com/musalhk">https://www.facebook.com/musalhk</a></li>
            <li>2012 - 1st M.E. in SELAB.</li>
            <li>2014 - Software Engineer in Cloud Lab. B2B / Samsung Electronics Mobile Communications Business</li>
          </ul>
        </P_info>
        <Research_interests>
          <p>Research_interests</p>
          <ul>
            <li>- Access Control in Ubiquitous</li>
            <li>- Software Engineering</li>
            <li>- IoT Technology (Internet of Things)</li>
            <li>- Health & Medical Technology</li>
            <li>- Cloud Computing</li>
          </ul>
        </Research_interests>
      </Member>
      <Member>
        <img src="members/Alumni/1.jpg" alt="jiang" />
        <P_info>
          <ul>
            <Name>Jiang Hua</Name>
            <li>jh19880208@163.com</li>
            <li></li>
            <li>0.0</li>
          </ul>
        </P_info>
        <Research_interests>
          <p>Research_interests</p>
          <ul>
            <li>Requirement Engineering</li>
          </ul>
        </Research_interests>
      </Member>
      <Member>
        <img src="members/Alumni/IMG_2242.jpg" alt="jaeho" />
        <P_info>
          <ul>
            <Name>Jaeho Choi</Name>
            <li>jaeho34@hanyang.ac.kr</li>
            <li><a href="http://www.facebook.com/rogue9071">http://www.facebook.com/rogue9071</a></li>
            <li>Hi, guys!! I am a crazy boy in this area :-)</li>
          </ul>
        </P_info>
        <Research_interests>
          <p>Research_interests</p>
          <ul>
            <li>Software Engineering</li>
            <li>A field of Access Control(XACML tools)</li>
            <li>Web Application & Security</li>
            <li>Cloud Computing Evironment</li>
            <li>Social Network Service</li>
          </ul>
        </Research_interests>
      </Member>
      <Member>
        <img src="members/Alumni/IMG_0889.jpg" alt="geunhwan" />
        <P_info>
          <ul>
            <Name>Geunhwan Park</Name>
            <li>0101d8cf@gmail.com</li>
            <li><a href="http://selab.hanyang.ac.kr/~pgh">http://selab.hanyang.ac.kr/~pgh</a></li>
            <li>Hi</li>
          </ul>
        </P_info>
        <Research_interests>
          <p>Research_interests</p>
          <ul>
          </ul>
        </Research_interests>
      </Member>
    </Members_section>
  )
  const section_list = [Ph_D, Me, Intern, Alumni]

  return(
    <Layout>
      <CustomHeader />
      <Contents>
        <Prof>
          <h1>Professor</h1>
          <Subject>
            <img src="members/scott.jpg" alt="scott"/>
            <P_info>
              <ul>
                <Name>Scott Uk-Jin Lee</Name>
                <li>scottlee@hanyang.ac.kr</li>
                <li>TBA</li>
                <li>
                  an asst. prof. in the CSE Dept. @ HYU (ERICA)
                  leading this Laboratory!
                </li>
              </ul>
            </P_info>
            <Career>
              <p>Career</p>
              <ul>
                <li>11 - &nbsp;&nbsp;&nbsp;&nbsp; : Assistant Professor in CSE Dept. @ Hanyang University, Korea</li>
                <li>09 - 11 : Postdoc @ CEA LIST, France</li>
                <li>05 - 06 : SE Programmer in SE Dept. @ University of Auckland, NZ</li>
                <li>04 - 04 : Visiting Researcher @ National University of Singapore</li>
                <li>04 - 08 : Ph.D in Computer Science @ University of Auckland, NZ</li>
                <li>00 - 03 : BE in Software Engineering @ University of Auckland, NZ</li>
              </ul>
            </Career>
          </Subject>
        </Prof>
        <Pupils>
          <Nav>
            <NavOption number={0} onClick={setSection} section={section}>
              Ph.D.
            </NavOption>
            <NavOption number={1} onClick={setSection} section={section}>
              M.E.
            </NavOption>
            <NavOption number={2} onClick={setSection} section={section}>
              Intern
            </NavOption>
            <NavOption number={3} onClick={setSection} section={section}>
              Alumni
            </NavOption>
          </Nav>
          {section_list[section]}
        </Pupils>
      </Contents>
    </Layout>
  )
}

export default Members
