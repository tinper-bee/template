import React, { Component } from 'react';
import {SearchPanel,FormControl,Label,Form,Radio,Tile, Row, Col} from 'tinper-bee';
import './index.less';
let HeadContainer = SearchPanel.HeadContainer;
let AdvancedContainer = SearchPanel.AdvancedContainer;

const FormItem = Form.FormItem;

class SearchPanelDemo extends Component {
    constructor(props){
        super(props);
        this.state = {
            state:'all',
            expanded: true
        }
    }
    stateChange(value){
        this.setState({
            state:value
        })
    }
    typeChange(value){
        this.setState({
            type:value
        })
    }
    degreeChange(value){
        this.setState({
            degree:value
        })
    }
    search(){

    }
    clear(){

    }
    onChange = () => {
        this.setState({expanded: !this.state.expanded})
    }
    render () {
        const { getFieldProps, getFieldError } = this.props.form;
        return (
            <div className="searchpanel-demo">
                <Tile className="searchpanel-demo-tile demo-tile" >
                    <h3>标签</h3>
                    <div className="searchpanel-demo-row" >
                    <SearchPanel
                    title='条件筛选'
                    onSearch={this.search}
                    onReset={this.clear}
                    expanded={this.state.expanded}
                    onChange={this.onChange}
                    onPanelChangeStart={status => {
                        console.log(status, "start")
                    }}
                    onPanelChangeIng={status => {
                        console.log(status, "ing")
                    }}
                    onPanelChangeEnd={status => {
                        console.log(status, "end")
                    }}>
                    <HeadContainer>
                        <div className='demo-head'>
                            <Form>
                                <Row>
                                    <Col xs={12} sm={6} md={4} lg={3}>
                                        <FormItem>
                                                <Label>名 称:</Label>
                                                <FormControl size="sm"
                                                    {
                                                    ...getFieldProps('orderCode', {
                                                        initialValue: '',
                                                    })
                                                    }
                                                />
                                        </FormItem>
                                    </Col>

                                    <Col xs={12} sm={6} md={4}  lg={3}>
                                        <FormItem>
                                                <Label>电话:</Label>
                                                <FormControl size="sm"
                                                    {
                                                    ...getFieldProps('supplierName', {
                                                        initialValue: '',
                                                    })
                                                    }
                                                />
                                        </FormItem>
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                    </HeadContainer>
                    
                    <AdvancedContainer>
                        <div className='demo-body'>
                            <Form>
                                <Row>

                                    <Col xs={12} sm={6} md={4} lg={3}>
                                        <FormItem>
                                                <Label>联系人:</Label>
                                                <FormControl size="sm"
                                                    {
                                                    ...getFieldProps('orderCode', {
                                                        initialValue: '',
                                                    })
                                                    }
                                                />
                                        </FormItem>
                                    </Col>

                                    <Col xs={12} sm={6} md={4}  lg={3}>
                                        <FormItem>
                                                <Label>供应商:</Label>
                                                <FormControl size="sm"
                                                    {
                                                    ...getFieldProps('supplierName', {
                                                        initialValue: '',
                                                    })
                                                    }
                                                />
                                        </FormItem>
                                    </Col> 

                                    <Col xs={12} sm={6} md={4}  lg={3}>
                                        <FormItem>
                                                <Label>地址:</Label>
                                                <FormControl size="sm"
                                                    {
                                                    ...getFieldProps('supplierName', {
                                                        initialValue: '',
                                                    })
                                                    }
                                                />
                                        </FormItem>
                                    </Col> 


                                    <Col xs={12} sm={6} md={4}  lg={3}>
                                        <FormItem>
                                                <Label>车牌:</Label>
                                                <FormControl size="sm"
                                                    {
                                                    ...getFieldProps('supplierName', {
                                                        initialValue: '',
                                                    })
                                                    }
                                                />
                                        </FormItem>
                                    </Col>

                                    <Col xs={12} sm={6} md={4}  lg={3}>
                                        <FormItem>
                                                <Label>备注:</Label>
                                                <FormControl size="sm"
                                                    {
                                                    ...getFieldProps('supplierName', {
                                                        initialValue: '',
                                                    })
                                                    }
                                                />
                                        </FormItem>
                                    </Col>

                                    <Col xs={12} sm={6} md={4}  lg={3}>
                                        <FormItem>
                                                <Label>编号:</Label>
                                                <FormControl size="sm"
                                                    {
                                                    ...getFieldProps('supplierName', {
                                                        initialValue: '',
                                                    })
                                                    }
                                                />
                                        </FormItem>
                                    </Col>

                                </Row>
                            </Form>
                        </div>                 
                    </AdvancedContainer>
                </SearchPanel>
                    </div>
                </Tile>
            </div>
        )
    }
}

export default Form.createForm()(SearchPanelDemo);