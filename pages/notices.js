import { useState } from "react"
import { All,BigTitle,Outline, Top, Bottom, Middle, In, Title, Name, Date} from "../components/pages/notices"
import CustomHeader from "../components/CustomHeader"
import Layout from "../components/Layout"


const Notice = () => {
    return(
        <Layout>
            <CustomHeader/>
            <All>
                <BigTitle>Notice</BigTitle>
                <br/>
                <Outline>
                    <Top>
                        <Middle>
                            <Title>
                                <In>
                                    <div>Title</div>
                                </In>
                            </Title>
                            <Name>
                                <In>
                                    <div>Name</div>
                                </In>
                            </Name>
                            <Date>
                                <In>
                                    <div>Date</div>
                                </In>
                            </Date>
                        </Middle>
                    </Top>    
                    <Bottom>
                        <Middle>
                            <Title>
                                <In>연구원 모집</In>
                            </Title>
                            <Name>
                                <In>Scott Uk-jin Lee</In>
                            </Name>
                            <Date>
                                <In>29 Aug 2014</In>
                            </Date>
                        </Middle>
                    </Bottom>

                    <Bottom>
                        <Middle>
                            <Title>
                                <In>2014 PL-SE First Joint Workshop</In>
                            </Title>
                            <Name>
                                <In>Scott Uk-jin Lee</In>
                            </Name>
                            <Date>
                                <In>29 Aug 2014</In>
                            </Date>
                        </Middle>
                    </Bottom>    

                    <Bottom>
                        <Middle>
                            <Title>
                                <In>Welcome to SELab Homepage!</In>
                            </Title>
                            <Name>
                                <In>Scott Uk-jin Lee</In>
                            </Name>
                            <Date>
                                <In>29 Aug 2014</In>
                            </Date>
                        </Middle>  
                    </Bottom>  
                </Outline>
            </All>
        </Layout>
    )
}
export default Notice