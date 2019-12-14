import { useState } from "react"
import {Contents, Section, Subject} from "../components/pages/members"
import CustomHeader from "../components/CustomHeader"
import Layout from "../components/Layout"

const Members = () => {
  return(
    <Layout>
      <CustomHeader />
      <Contents>
        <Section>
          <h1>Professor</h1>
          <Subject>
            <img src="members/scott.jpg" alt="scott" />
            <div class="left_info">
              <ul>
                <li><h3>Scott Uk-Jin Lee</h3></li>
                <li>scottlee@hanyang.ac.kr</li>
                <li>TBA</li>
                <li>
                  an asst. prof. in the CSE Dept. @ HYU (ERICA)
                  leading this Laboratory!
                </li>
              </ul>
            </div>
            <div class="right_info">
              <p>Career</p>
              <ul>
                <li>11 - &nbsp;&nbsp;&nbsp; : Assistant Professor in CSE Dept. @ Hanyang University, Korea</li>
                <li>09 - 11 : Postdoc @ CEA LIST, France</li>
                <li>05 - 06 : SE Programmer in SE Dept. @ University of Auckland, NZ</li>
                <li>04 - 04 : Visiting Researcher @ National University of Singapore</li>
                <li>04 - 08 : Ph.D in Computer Science @ University of Auckland, NZ</li>
                <li>00 - 03 : BE in Software Engineering @ University of Auckland, NZ</li>
              </ul>
            </div>
          </Subject>
        </Section>
        <Section>
          <h1>Ph.D.</h1>
          <Subject>
            <img src="members/ph.D/isma.jpg" alt="isma" />
            <div class="left_info">
              <ul>
                <li><h3>Isma Farah</h3></li>
                <li>isma2012@hanyang.ac.kr</li>
                <li><a href="http://www.linkedin.com/in/ismafarah">http://www.linkedin.com/in/ismafarah</a></li>
                <li>PhD scholar From Pakistan on HEC Scholarship</li>
              </ul>
            </div>
            <div class="right_info">
              <h2>research_interests</h2>
              <ul>
                <li>Software Engineering</li>
                <li>Web Applications</li>
                <li>Semantic Web</li>
                <li>Database Management</li>
                <li>Formal Methods</li>
              </ul>
            </div>
          </Subject>
          <Subject>
            <img src="members/ph.D/photo_(1).jpg" alt="abdul" />
            <div class="left_info">
              <ul>
                <li><h3>Abdul Rahim</h3></li>
                <li>rahim750413@hanyang.ac.kr</li>
                <li><a href="https://www.facebook.com/abdul.ariffin">https://www.facebook.com/abdul.ariffin</a></li>
                <li>Master's leading to Phd scholar from Kuala Lumpur,Malaysia</li>
              </ul>
            </div>
            <div class="right_info">
              <h2>research_interests</h2>
              <ul>
                <li>Software Engineering</li>
                <li>- Hadoop(MapReduce)</li>
                <li>- Multithreading</li>
              </ul>
            </div>
          </Subject>
          <Subject>
            <img src="members/ph.D/Untitled.jpg" alt="asad" />
            <div class="left_info">
              <ul>
                <li><h3>Asad Abbas</h3></li>
                <li>asadabbas@hanyang.ac.kr</li>
                <li></li>
                <li>HEC Pakistan Scholar MS leading to PhD
                  From Pakistan</li>
              </ul>
            </div>
            <div class="right_info">
              <h2>research_interests</h2>
              <ul>
                <li>Software Engineering</li>
                <li>- Product Line Software Engineering</li>
              </ul>
            </div>
          </Subject>
          <Subject>
            <img src="members/ph.D/gichan.jpg" alt="Gichan Lee" />
            <div class="left_info">
              <ul>
                <li><h3>Gichan Lee</h3></li>
                <li>fantasyopy@gmail.com</li>
                <li><a href="https://www.linkedin.com/in/GCSELAB">https://www.linkedin.com/in/GCSELAB</a></li>
                <li>2016-2 ~
                  M.E. to Ph.D.</li>
              </ul>
            </div>
            <div class="right_info">
              <h2>research_interests</h2>
              <ul>
                <li>Software Engineering in practice</li>
                <li>Access Control in IoT environment(project)</li>
              </ul>
            </div>
          </Subject>
          <Subject>
            <img src="members/ph.D/mohsin.jpg" alt="Mohsin Javaid" />
            <div class="left_info">
              <ul>
                <li><h3>Mohsin Javaid</h3></li>
                <li>mohsinjavaid@hanyang.ac.kr</li>
                <li><a href="https://goo.gl/3QXH6k">https://goo.gl/3QXH6k</a></li>
                <li>Ph.D. Scholar from Pakistan on HEC Scholarship.</li>
              </ul>
            </div>
            <div class="right_info">
              <h2>research_interests</h2>
              <ul>
                <li>Software Engineering</li>
                <li>Model Driven Architecture</li>
                <li>Internet of Things</li>
                <li>Android Application</li>
                <li>Requirement Engineering</li>
              </ul>
            </div>
          </Subject>
          <Subject>
            <img src="members/ph.D/khan.jpg" alt="khan" />
            <div class="left_info">
              <ul>
                <li><h3>Muhammad Umair Khan</h3></li>
                <li>mumairkhan@hanyang.ac.kr</li>
                <li><a href="https://goo.gl/GdYteF">https://goo.gl/GdYteF</a></li>
                <li>Ph.D. Scholar from Pakistan on HEC scholarship</li>
              </ul>
            </div>
            <div class="right_info">
              <h2>research_interests</h2>
              <ul>
                <li>Software Engineering</li>
                <li>Concurrent Programming</li>
                <li>Internet of Thing</li>
              </ul>
            </div>
          </Subject>
        </Section>
        <Section>
          <h1>M.E.</h1>
          <Subject>
            <img src="members/M.E/11.jpg" alt="gayeon" />
            <div class="left_info">
              <ul>
                <li><h3>Gayeon Kim</h3></li>
                <li>gayeonkim91@gmail.com</li>
                <li><a href=""></a></li>
                <li>Hi</li>
              </ul>
            </div>
            <div class="right_info">
              <h2>research_interests</h2>
              <ul>
                <li>Software Engineering</li>
                <li>Web Applications</li>
                <li>Bigdata analysis</li>
              </ul>
            </div>
          </Subject>
          <Subject>
            <img src="members/placeholder.png" alt="no_photo" />
            <div class="left_info">
              <ul>
                <li><h3>Seonwoong Kim</h3></li>
                <li>oung123@hanmail.net</li>
                <li><a href="">none</a></li>
                <li>Wussup</li>
              </ul>
            </div>
            <div class="right_info">
              <h2>research_interests</h2>
              <ul>
                <li>Software Engineering</li>
                <li>Model Checking</li>
                <li>Swift2</li>
              </ul>
            </div>
          </Subject>
          <Subject>
            <img src="members/M.E/325115318014822206.jpg" alt="wu" />
            <div class="left_info">
              <ul>
                <li><h3>Wu Zhiqiang</h3></li>
                <li>hhhwwwuuu@hanyang.ac.kr</li>
                <li></li>
                <li>-</li>
              </ul>
            </div>
            <div class="right_info">
              <h2>research_interests</h2>
              <ul>
                <li>Software Engineering</li>
                <li>- Concurrency Detection</li>
                <li>- Malware Detection</li>
              </ul>
            </div>
          </Subject>
          <Subject>
            <img src="members/M.E/gif.gif" alt="gwanggyu" />
            <div class="left_info">
              <ul>
                <li><h3>Gwanggye Choi</h3></li>
                <li>gcahmoei@hanyang.ac.kr</li>
                <li><a href="">.</a></li>
                <li>.</li>
              </ul>
            </div>
            <div class="right_info">
              <h2>research_interests</h2>
              <ul>
                <li>Software engineering</li>
                <li>- requirement engineering</li>
              </ul>
            </div>
          </Subject>
          <Subject>
            <img src="members/M.E/140x175.jpg" alt="hyunglak" />
            <div class="left_info">
              <ul>
                <li><h3>Hyunglak Kim</h3></li>
                <li>jikuaij@gmail.com</li>
                <li><a href=""></a></li>
                <li>Hi</li>
              </ul>
            </div>
            <div class="right_info">
              <h2>research_interests</h2>
              <ul>
                <li>Software Engineering</li>
                <li>- Crowdsourcing Software Develop</li>
                <li>- Android Application</li>
                <li>- Model Checking</li>
              </ul>
            </div>
          </Subject>
          <Subject>
            <img src="members/placeholder.png" alt="no_photo" />
            <div class="left_info">
              <ul>
                <li><h3>Youn Guen Ahn</h3></li>
                <li>frebern@naver.com</li>
                <li><a href="http://frebern.xyz">http://frebern.xyz</a></li>
                <li>TBA</li>
              </ul>
            </div>
            <div class="right_info">
              <h2>research_interests</h2>
              <ul>
                <li>Java, Android</li>
              </ul>
            </div>
          </Subject>
          <Subject>
            <img src="members/placeholder.png" alt="no_photo" />
            <div class="left_info">
              <ul>
                <li><h3>Kyojune Hwang</h3></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
            <div class="right_info">
              <h2>research_interests</h2>
              <ul>
              </ul>
            </div>
          </Subject>
          <Subject>
            <img src="members/placeholder.png" alt="no_photo" />
            <div class="left_info">
              <ul>
                <li><h3>Hakjin Lee</h3></li>
                <li>gsdjini91@gmail.com</li>
                <li></li>
                <li></li>
              </ul>
            </div>
            <div class="right_info">
              <h2>research_interests</h2>
              <ul>
                <li>Smell Detection</li>
                <li>Refactoring</li>
                <li>Game QA</li>
              </ul>
            </div>
          </Subject>
        </Section>
        <Section>
          <h1>Intern</h1>
          <Subject>
            <img src="members/Intern/CAM00259.jpg" alt="dahae" />
            <div class="left_info">
              <ul>
                <li><h3>Dahae Sung</h3></li>
                <li>sdh4513136@hanmail.net</li>
                <li></li>
                <li>:)</li>
              </ul>
            </div>
            <div class="right_info">
              <h2>research_interests</h2>
              <ul>
                <li></li>
              </ul>
            </div>
          </Subject>
          <Subject>
            <img src="members/placeholder.png" alt="no_photo" />
            <div class="left_info">
              <ul>
                <li><h3>Yongtaek Oh</h3></li>
                <li>ka123ak1@gmail.com</li>
                <li></li>
                <li></li>
              </ul>
            </div>
            <div class="right_info">
              <h2>research_interests</h2>
              <ul>
                <li>IoT</li>
              </ul>
            </div>
          </Subject>
          <Subject>
            <img src="members/placeholder.png" alt="no_photo" />
            <div class="left_info">
              <ul>
                <li><h3>Namju Park</h3></li>
                <li>qkrska66@hanyang.ac.kr</li>
                <li></li>
                <li></li>
              </ul>
            </div>
            <div class="right_info">
              <h2>research_interests</h2>
              <ul>
                <li></li>
              </ul>
            </div>
          </Subject>
        </Section>
        <Section>
          <h1>Alumni</h1>
          <Subject>
            <img src="members/placeholder.png" alt="no_photo" />
            <div class="left_info">
              <ul>
                <li><h3>Jaejin Kim</h3></li>
                <li>jaejinkim@hanyang.ac.kr</li>
                <li><a href="https://www.facebook.com/musalhk">https://www.facebook.com/musalhk</a></li>
                <li>2012 - 1st M.E. in SELAB.</li>
                <li>2014 - Software Engineer in Cloud Lab. B2B / Samsung Electronics Mobile Communications Business</li>
              </ul>
            </div>
            <div class="right_info">
              <h2>research_interests</h2>
              <ul>
                <li>- Access Control in Ubiquitous</li>
                <li>- Software Engineering</li>
                <li>- IoT Technology (Internet of Things)</li>
                <li>- Health & Medical Technology</li>
                <li>- Cloud Computing</li>
              </ul>
            </div>
          </Subject>
          <Subject>
            <img src="members/Alumni/1.jpg" alt="jiang" />
            <div class="left_info">
              <ul>
                <li><h3>Jiang Hua</h3></li>
                <li>jh19880208@163.com</li>
                <li></li>
                <li>0.0</li>
              </ul>
            </div>
            <div class="right_info">
              <h2>research_interests</h2>
              <ul>
                <li>Requirement Engineering</li>
              </ul>
            </div>
          </Subject>
          <Subject>
            <img src="members/Alumni/IMG_2242.jpg" alt="jaeho" />
            <div class="left_info">
              <ul>
                <li><h3>Jaeho Choi</h3></li>
                <li>jaeho34@hanyang.ac.kr</li>
                <li><a href="http://www.facebook.com/rogue9071">http://www.facebook.com/rogue9071</a></li>
                <li>Hi, guys!! I am a crazy boy in this area :-)</li>
              </ul>
            </div>
            <div class="right_info">
              <h2>research_interests</h2>
              <ul>
                <li>Software Engineering</li>
                <li>A field of Access Control(XACML tools)</li>
                <li>Web Application & Security</li>
                <li>Cloud Computing Evironment</li>
                <li>Social Network Service</li>
              </ul>
            </div>
          </Subject>
          <Subject>
            <img src="members/Alumni/IMG_0889.jpg" alt="geunhwan" />
            <div class="left_info">
              <ul>
                <li><h3>Geunhwan Park</h3></li>
                <li>0101d8cf@gmail.com</li>
                <li><a href="http://selab.hanyang.ac.kr/~pgh">http://selab.hanyang.ac.kr/~pgh</a></li>
                <li>Hi</li>
              </ul>
            </div>
            <div class="right_info">
              <h2>research_interests</h2>
              <ul>
              </ul>
            </div>
          </Subject>
        </Section>
      </Contents>
    </Layout>
  )
}

export default Members
