import React,  {useEffect}from 'react';
import CodePush from 'react-native-code-push'

const codePushOption = {
  checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME,
};


const CodePushWrapper = (WrappedComponent) => {
    
    const WrappedApp = ()=>{
        useEffect(() => {
            //app resumes after 10 minutes
            CodePush.sync({ installMode: CodePush.InstallMode.ON_NEXT_RESUME, minimumBackgroundDuration: 10}, codepushSyncStatus, null); //10 sec
            
          }, [])
        
          const codepushSyncStatus = (status) => {
            console.log("code push sync status", status)
          }
          return <WrappedComponent />
    }
    
    return CodePush(codePushOption)(WrappedApp);
}

export default CodePushWrapper