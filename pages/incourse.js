import { useState } from "react"
import {Nav,Left,A,Right,All,Slides,Li,H2,Span} from "../components/pages/incourse"
import CustomHeader from "../components/CustomHeader"
import Layout from "../components/Layout"


const Course_Inpage = () => {
    const[course, setCourse] = useState(0)

    const Home=(
        <All>
            <Left>
                <a href="#CO">Course Objectives</a>
                <a href="#L">Lecturer: Scott Lee</a>
                <a href="#TA">Teaching Assistants</a>
                <a href="#PD">Places & Dates</a>
                <a href="#CI">Course Information</a>
                <a href="#TP">Team Project</a>
                <a href="#A">Assessments</a>
            </Left>
            <br/><br/>
            <Right>
                <div id ="CO">
                    <h3>Course Objectives</h3>
                    <p>
                        In this course, the followings will be covered to adequately enable web programming and web application development:
                    </p>
                    <ol>
                        <li>Understand the protocols, language  and systems used on the Web (HTML, CSS, HTTP, URLs, XML)</li>
                        <li>Understand the functions of clients and servers on the Web &amp; learn how to implement client-side scripts (JavaScript) and server-side scripts (PHP)</li>
                        <li>Obtain ability to design and implement an interactive web site where usability, accessibility and internationalization issues are considered</li>
                        <li>Learn how to use/manage database associated with web applications (mainly storage and retrieval)</li>
                    </ol>
                </div>

                <div id="L">
                    <h3>Lecturer: Scott Lee</h3>
                    <ul>
                        <li>Office: 학연산클러스터 617호</li>
                        <li>Tel: 031-400-5238</li>
                        <li>Email: scottlee@hanyang.ac.kr</li>
                    </ul>
                </div>

                <div id="TA"> 
                <h3>Teaching Assistants</h3>
                <ul>
                    <li> Gichan Lee
                        <ul>
                            <li>Office: 학연산클러스터 621호</li>
                            <li>Tel: 031-400-4754</li>
                            <li>Email: <A href="mailto:fantasyopy@gmail.com">fantasyopy@gmail.com</A></li>
                        </ul>
                    </li>
                    <li> HakJin Lee
                        <ul>
                            <li>Office: 학연산클러스터 621호</li>
                            <li>Tel: 031-400-4754</li>
                            <li>Email: <A href="mailto:gsdjini91@gmail.com">gsdjini91@gmail.com</A></li>
                        </ul>
                    </li>
                </ul>            
                </div>

                <div id="PD">
                    <h3>Places & Dates</h3>
                    <p>Class 1 (23497)</p>
                    <ul>
                        <li>Lecture : Thu (09:00 - 10:30) &amp; Fri (13:00 - 14:30) @ Engineering Building #1 Room 402</li>
                        <li>Lab : Fri (09:00 - 11:00) @ Engineering Building #4 PC Room 1 &amp; 2</li>
                    </ul>
                    <p>Class 2 (24465)</p>
                    <ul>
                        <li>Lecture : Thu (10:30 - 12:00)  &amp; Fri (14:30 - 16:00) @ Engineering Building #1 Room 407</li>
                        <li>lab : Fri (16:00 - 18:00) @ Engineering Building #4 PC Room 1 &amp; 2 </li>
                    </ul>
                </div>

                <div id="CI">
                    <div>
                        <h3>Course Forum</h3>
                        <ul>
                            <li><A href="https://learn.hanyang.ac.kr">Blackboard</A></li>
                        </ul>
                    </div>
                    <div>
                        <h3>Textbooks</h3>
                        <ul>
                            <li>Marty Stepp, Jessica Miller, Victoria Kirst, <strong>Web Programming Step by Step: Second Edition</strong>, Step by Step Publishing, 2012 </li>
                        </ul>
                    </div>
                    <div>
                        <h3>Course Schedule</h3>
                        <ul>
                            <li>Week 01 : 05/09/2019 - Introduction &amp; The Internet and World Wide Web</li>
                            <li>Week 01 : 06/09/2019 - Basic HTML</li>
                            <li>Week 02 : 12/09/2019 - No Lecture (추석 Thanksgiving)</li>
                            <li>Week 02 : 13/09/2019 - No Lecture (추석 Thanksgiving)</li>
                            <li>Week 03 : 19/09/2019 - Basic HTML</li>
                            <li>Week 03 : 20/09/2019 - CSS for Styling </li>
                            <li>Week 04 : 26/09/2019 - CSS for Styling</li>
                            <li>Week 04 : 27/09/2019 - Page Layout </li>
                            <li>Week 05 : 02/10/2019 - [특강] 게임 서버 개발 - 17:00 ~ 19:00 @제1학술관 101호 (supplementary lecture for 03/10/2019) </li>
                            <li>Week 05 : 03/10/2019 - No Lecture (National Foundation Day) - supplementary lecture 02/10/2019</li>
                            <li>Week 05 : 04/10/2019 - Page Layout </li>
                            <li>Week 06 : 10/10/2019 - Basic PHP</li>
                            <li>Week 06 : 11/10/2019 - Basic PHP</li>
                            <li>Week 07 : 17/10/2019 - Basic PHP </li>
                            <li>Week 07 : 18/10/2019 - Forms</li>
                            <li>Week 08 : 24/10/2019 - Mid-Term Exam Preparation</li>
                            <li>Week 08 : 25/10/2019 - Mid-Term Exam 13:00 ~ 16:00 @제1학술관 101호 (Educational Building I Room 101) &amp; 4공학관 PC1실 (Engineering Building IV PC Room 1)</li>
                            <li>Week 09 : 31/10/2019 - Forms</li>
                            <li>Week 09 : 01/11/2019 - Forms</li>
                            <li>Week 10 : 07/11/2019 - Relational Database &amp; SQL</li>
                            <li>Week 10 : 08/11/2019 - Relational Database &amp; SQL</li>
                            <li>Week 11 : 14/11/2019 - JavaScript</li>
                            <li>Week 11 : 15/11/2019 - JavaScript</li>
                            <li>Week 12 : 21/11/2019 - JavaScript &amp; DOM</li>
                            <li>Week 12 : 22/11/2019 - DOM</li>
                            <li>Week 13 : 28/11/2019 - Prototype &amp; Event</li>
                            <li>Week 13 : 29/11/2019 - Ajax &amp; XML &amp; JSON</li>
                            <li>Week 14 : 05/12/2019 - Ajax &amp; XML &amp; JSON</li>
                            <li>Week 14 : 06/12/2019 - Web Services</li>
                            <li>Week 15 : 12/12/2019 - Final Exam</li>
                            <li>Week 15 : 13/12/2019 - Final Exam</li>
                            <li>Week 16 : 19/12/2019 - Team Project Presentation</li>
                            <li>Week 16 : 20/12/2019 - Team Project Presentation</li>
                            <ul>
                            <li>Marty Stepp, Jessica Miller, Victoria Kirst, <strong>Web Programming Step by Step: Second Edition</strong>, Step by Step Publishing, 2012 </li>
                            </ul>
                        </ul>
                    </div>
                </div>

                <div>
                    <div id="TP">
                        <h3>Team Project</h3>
                        <ul>
                            <li><A target="_blank" href="project.html">Team Project</A></li>
                        </ul>
                    </div>

                    <div>
                        <h3>Team Project Group</h3>
                        <ul>
                            <li>
                            Class 23497
                            <ul>
                                <li><strong>박서연</strong>, 이효원, 정희재, 김재현, 모지환, 황예찬</li>
                                <li><strong>이종민</strong>, 박준영, 박진혁, 송현수, 엄세진, 이준섭</li>
                                <li><strong>김소현</strong>, 임소윤, 이정인, 강가원, 안예지</li>
                                <li><strong>이민혁</strong>, 백승민, 김유현, <strong>Ana Carolina Cardoso</strong>,  Zhou Xueyi, Frederik Bonde</li>
                                <li><strong>양재우</strong>, 주한새, 강은호, 권순범, 김하영, 안한서</li>
                                <li><strong>위준범</strong>, 배진우, 박재선, 박성수, 최준호</li>
                                <li><strong>박재용</strong>, 김동규, 이세명, 오승기, 김덕영</li>
                                <li><strong>고동현</strong>, 김동현, 김두호, 왕종휘, 김예진, 문수림</li>
                                <li><strong>성태훈</strong>, 박예찬, 이무경, 장윤호, 심유빈</li>
                                <li><strong>최웅순</strong>, 김태인, 이재윤, 김은영, 김민지, 고영준</li>
                                <li><strong>윤규민</strong>, 박제현, 임정현, 윤지인, 이수종</li>
                            </ul>
                            </li>
                            <li>
                            Class 24465
                            <ul>
                                <li><strong>유영민</strong>, 강민제, 박연희, 이효원, 이정규</li>
                                <li><strong>문현준</strong>, Tsoy Sergey, Shu Zhiwen, XIANG FANGSONG, 김태웅, 김세훈</li>
                                <li><strong>박예림</strong>, 사은수, 이지선, 송용호, 권태형, 윤성주</li>
                                <li><strong>박제균</strong>, 장주섭, 강은지, 정은지, 정은지</li>
                                <li><strong>장윤지</strong>, 김종훈, 이해석, 이원석, 이준기</li>
                                <li><strong>한동연</strong>, 안요한, 김민재, 석예림, 박재현, 김서권</li>
                                <li><strong>김규진</strong>, 김승호, 김용준, 김우정, 김재훈</li>
                                <li><strong>강동완</strong>, 김남호, 현병욱, 이진태, 김정우</li>
                            </ul>
                            </li>
                        </ul>
                    </div>
                </div>

                <div id="A">
                    <h3>Assessments</h3>
                    <ul>
                        <li>Attendance (10%)</li>
                        <li>Midterm Exam (30%) - <A target="_blank" href="2019_2_Mid_Score.pdf"> Midterm Score </A></li>
                        <li>Final Exam (30%)</li>
                        <li>Team Project (30%)</li>
                    </ul>
                </div>
            </Right>
        </All>
    )

    const Lectures=(
        <All>
            <Slides>
                <ul>
                    <Li>
                        <H2>No.</H2>
                        <H2>Lecture Slides</H2>
                    </Li>
                    <Li>
                        <Span>0</Span>
                        <Span>Introduction</Span>
                    </Li>
                    <Li>
                        <Span>1</Span>
                        <Span>The Internet & World Wide Web</Span>
                    </Li>
                    <Li>
                        <Span>2</Span>
                        <Span>Basic HTML</Span>
                    </Li>
                    <Li>
                        <Span>3</Span>
                        <Span>CSS for Styling</Span>
                    </Li>
                    <Li>
                        <Span>4</Span>
                        <Span>Page Layout</Span>
                    </Li>
                    <Li>
                        <Span>5</Span>
                        <Span>PHP</Span>
                    </Li>
                    <Li>
                        <Span>6</Span>
                        <Span>Forms</Span>
                    </Li>
                    <Li>
                        <Span>7</Span>
                        <Span>Relational Database & SQL [<A href="db.zip">DBs</A>]</Span>
                    </Li>
                    <Li>
                        <Span>8</Span>
                        <Span>JavaScript</Span>
                    </Li>
                    <Li>
                        <Span>9</Span>
                        <Span>Document Object Model (DOM)</Span>
                    </Li>
                    <Li>
                        <Span>10</Span>
                        <Span>Prototype</Span>
                    </Li>
                    <Li>
                        <Span>11</Span>
                        <Span>Events</Span>
                    </Li>
                    <Li>
                        <Span>12</Span>
                        <Span>Ajax, XML, JSON</Span>
                    </Li>
                    <Li>
                        <Span>13</Span>
                        <Span>Web Services</Span>
                    </Li>
                    <Li>
                        <Span>14</Span>
                        <Span>Scriptaculous</Span>
                    </Li>
                </ul>
            </Slides>
        </All>
    )

    const Labs=(
        <All>
            <Slides>
                <ul>
                    <Li>
                        <H2>No.</H2>
                        <H2>Labs</H2>
                    </Li>
                    <Li>
                        <Span>0</Span>
                        <Span>Introduction - Week3</Span>
                    </Li>
                    <Li>
                        <Span>1</Span>
                        <Span>About Me (HTML) - Week 4</Span>
                    </Li>
                    <Li>
                        <Span>2</Span>
                        <Span>CSS - Week 5</Span>
                    </Li>
                    <Li>
                        <Span>3</Span>
                        <Span>CSS Design & Layout - Week 6</Span>
                    </Li>
                    <Li>
                        <Span>4</Span>
                        <Span>Movie Review (HTML, CSS, Layout) - Week 7</Span>
                    </Li>
                    <Li>
                        <Span>5</Span>
                        <Span>Basic PHP - Week 9</Span>
                    </Li>
                    <Li>
                        <Span>6</Span>
                        <Span>Forms - Week 10</Span>
                    </Li>
                    <Li>
                        <Span>7</Span>
                        <Span>SQL - Week 11</Span>
                    </Li>
                    <Li>
                        <Span>8</Span>
                        <Span>JavaScript - Week 12</Span>
                    </Li>
                    <Li>
                        <Span>9</Span>
                        <Span>Maze (DOM, Prototype, Event) - Week 13</Span>
                    </Li>
                    <Li>
                        <Span>10</Span>
                        <Span>Ajax & XML & JSON - Week 14</Span>
                    </Li>
                </ul>
            </Slides>
        </All>
    )
    const nav_list=[Home,Lectures,Labs]
    return(
        <Layout>
            <CustomHeader/>
            <Nav>
                <p onClick={()=>setCourse(2)}>Labs</p>
                <p onClick={()=>setCourse(1)}>Lecture</p>  
                <p onClick={()=>setCourse(0)}>Home</p>          
            </Nav>
            {nav_list[course]}
        </Layout>
    )
}
export default Course_Inpage