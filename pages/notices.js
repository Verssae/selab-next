import { useState } from "react"
import {All,Bigtitle,Content,List,Smallmenu} from "../components/pages/notices"
import CustomHeader from "../components/CustomHeader"
import Layout from "../components/Layout"


const Notice = () => {
    return(
        <Layout>
            <CustomHeader/>
            <All>
                <Bigtitle>Notice</Bigtitle>
                <Content>
                    <Smallmenu>
                        <div>Title</div>
                        <div>Name</div>
                        <div>Date</div>
                    </Smallmenu>
                    <List>
                        <div>연구원 모집</div>
                        <div>Scott Uk-jin Lee</div>
                        <div>29 Aug 2014</div>
                    </List>
                    <List>
                        <div>2014 PL-SE First Joint Workshop</div>
                        <div>Scott Uk-jin Lee</div>
                        <div>29 Aug 2014</div>
                    </List>
                    <List>
                        <div>Welcome to SELab Homepage!</div>
                        <div>Scott Uk-jin Lee</div>
                        <div>29 Aug 2014</div>

                    </List>
                </Content>
                  

            </All>
        </Layout>
    )
}
export default Notice