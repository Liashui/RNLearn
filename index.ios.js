/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React, { Component } from 'react';
 import {
 	AppRegistry,
 	StyleSheet,
 	Text,
 	View,
 	Image,
 	ListView,
 	TouchableOpacity,
 } from 'react-native';

 export default class AwesomeProject extends Component {

 	constructor(props) {
 		super(props);
 		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
 		this.state = {
 			dataSource: ds.cloneWithRows([
 				'账号与安全', '公告信息', '意见反馈', '为我评分', '推送消息设置', '分享账号设置', '清楚缓存', '关于','客服电话'
 				])
 		};
 	}

 	_pressRow(rowData: string,rowID: number){
        alert(rowData+'+'+rowID);
    }

 	_renderRow(rowData: string, sectionID: number, rowID: number, highlightRow: (sectionID: number, rowID: number) => void) {
 		return ( 
 			<TouchableOpacity onPress={()=>this._pressRow(rowData,rowID)}> 
 			<View>
 			<View style={styles.rowContainer}>
 			<View style ={styles.rowIcon}></View>
 			<Text style ={styles.rowText}>{rowData}</Text>
 			</View><View style={styles.line}></View>
 			<View style={styles.rowArrowContainer}><Image style ={styles.rowArrow} source={require('./ico_arrow.png')}></Image></View>
 			</View>
 			</TouchableOpacity> );
 	}

 	render() {
 		return (
 			<View style={styles.container}>
 			<View style={styles.topBar}>
 			</View>

 			<Text style={styles.title}>
 			设置
 			</Text>

 			<View style={styles.backBtnContainer}>
 			<Image style={styles.backBtn} source={require('./wm_nav_back_new_bg.png')}/>
 			</View>

 			<View style={styles.line}>
 			</View>

 			
 			<ListView style={styles.list}
 			dataSource={this.state.dataSource}
 			renderRow={this._renderRow.bind(this)}
 			/>

 			</View>
 			);
 	}
 }

 const styles = StyleSheet.create({
 	container: {
 		flex: 1,
 	},
 	topBar: {
 		backgroundColor: '#ffffff',
 		height: 20,
 	},
 	table: {
 	},

 	backBtnContainer: {
 		width:44,
 		height:44,
 		marginTop:-44,
 		justifyContent: 'center',
 	},
 	backBtn: {
 		width:30,
 		height:30
 	},
 	title: {
 		fontSize: 20,
 		fontWeight: 'bold',
 		height:44,
 		lineHeight:44,
 		backgroundColor: '#ffffff',
 		textAlign:'center',
 	},
 	line: {
 		height:1,
 		backgroundColor: '#bebebe',
 	},
 	list: {
 		flex:1,
 	},
 	rowIcon: {
 		width:20,
 		height:20,
 		backgroundColor: '#000000',
 		marginLeft:15,
 	},
 	rowText: {
 		marginLeft:10,
 	},

	rowArrowContainer: {
		flex:1,
 		alignItems: 'flex-end',
 		marginTop:0,
 		marginTop:-45,
 		height:45,
 		justifyContent: 'center',
 	}, 	
 	rowArrow: {
 		width:7,
 		height:13,
 		marginRight:15,
 	},
 	rowContainer: {
 		flex:0,
 		flexDirection: 'row',
 		alignItems: 'center',
 		height:45,
 	},
 });

 AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
