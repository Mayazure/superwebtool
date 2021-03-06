import React, {useEffect, useState} from "react";
import {Tree} from 'antd';
import { v4 as uuidv4 } from 'uuid';
import {
    DownOutlined,
    GoldOutlined,
    UnorderedListOutlined,
    FieldStringOutlined,
    FieldNumberOutlined,
    FieldBinaryOutlined
} from '@ant-design/icons';

function JSONTreeView(props){

    const {jsonStr} = props;

    const [jsonTreeData, setJsonTreeData] = useState(null);
    const [parseError, setParseError] = useState(null);

    useEffect(()=> {
        setJsonTreeData(null)
        setParseError(null)
        console.log('useEffect')
        console.log(jsonStr)
        if (jsonStr) {
            try {
                console.log('parse')
                const parsedJson = JSON.parse(jsonStr);
                const jsonTreeData = tree('json', parsedJson);
                setJsonTreeData(jsonTreeData);
            } catch (err) {
                setParseError(err.toString())
            }
        }
    }, [jsonStr])

    if(jsonTreeData){
        return(
            <Tree
                showIcon
                showLine={{showLeafIcon: false}}
                switcherIcon={<DownOutlined />}
                treeData={jsonTreeData}
            />
        )
    }

    if(parseError){
        return(<div style={{color:'red'}}>{parseError}</div>)
    }

    return(<></>)
}

const tree = (key, value)=>{
    const node = treeNode(key, value)
    const data = [node]
    return data
}

const treeNode = (key, value)=>{
    if(Array.isArray(value)){
        const node = {
            title:key,
            key:uuidv4(),
            // icon: <span color="#87d068">[]</span>,
            icon: <UnorderedListOutlined />,
            children:[]
        }
        value.forEach((child, index)=>{
            node.children.push(treeNode(index.toString(),child))
        })
        return node;
    }else if(typeof value === 'object'){
        const node = {
            title:key,
            key:uuidv4(),
            // icon: <span color="#108ee9">{"{}"}</span>,
            icon: <GoldOutlined />,
            children:[]
        }
        Object.keys(value).forEach((key)=>{
            node.children.push(treeNode(key,value[key]))
        })
        return node;
    }else{
        let title;
        let icon;
        switch (typeof value){
            case 'string':
                title = `${key} : "${value}"`
                icon = <FieldStringOutlined />
                break
            case 'number':
                title = `${key} : ${value}`
                icon = <FieldNumberOutlined />
                break
            case 'boolean':
                title = `${key} : ${value}`
                icon = <FieldBinaryOutlined />
                break
            default:
                title = `${key} : ${value}`
        }
        return({
            title,
            icon,
            key:uuidv4(),
        })
    }
}

export default JSONTreeView;
