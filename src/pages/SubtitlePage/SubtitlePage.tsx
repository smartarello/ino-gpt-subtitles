import { useState } from 'react';
import axios from "axios";

import {CircularProgress, Stepper, Step, StepLabel, Box, Typography, Card, CardContent, Divider} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';

// Import React FilePond
import { FilePond } from 'react-filepond'

// Import FilePond styles
import 'filepond/dist/filepond.min.css'

import PageHeader from '../../components/PageHeader/PageHeader';

const SubtitlePage = () => {
  
  const theme = useTheme();

  const { t } = useTranslation();

  const [activeStep, setActiveStep] = useState(0);

  const [videoDescription, setVideoDescription] = useState("");
  const [videoKeyWords, setVideoKeyWords] = useState<string[]>([]);

  const handleAnalysis = (data: any) => {

    console.log(data);
    setVideoDescription(data.summary);   
    data.keywords.map((word: string) => setVideoKeyWords( (arr) => [...arr, word] ));    
    setActiveStep(3);
  };

  const handleFileUploaded = () => {
    setActiveStep(1)    
    axios.get("http://localhost:8000/video-metadata").then((response) => {
      handleAnalysis(response.data);
    });
  };  

  const getStepContent = (step: any) => {
    
    switch (step) {      
      case 1:
        return (
          <Box sx={{ display: "flex", justifyContent : "center", alignItems : "center" , marginTop: 5}}>
            <Box sx={{ width: 800, p:1, m:1, display: "flex", justifyContent : "center", alignItems : "center", flexDirection: 'column' }}>     
              <CircularProgress />    
              <Typography mt={2}>Analysis in progress by IA</Typography>
            </Box>
          </Box>
        );
        break;
      case 2:
      case 3:
        return (
          <Box sx={{ display: "flex", justifyContent : "center", alignItems : "center", marginTop: 5}}>
            <Card sx={{ width: 800}}>
              <CardContent>
                <Typography variant='h6' sx={{ mb: 1}} color="text.primary" gutterBottom>
                  Video summary
                </Typography>
                <Typography variant="body2" component="div">
                  {videoDescription}
                </Typography>
                <Divider sx={{ mt: 4 }}/>
                <Typography variant='h6' sx={{ mb: 0.5, mt: 1 }} color="text.primary">
                  Keywords
                </Typography>
                
                {videoKeyWords.map((word: string, index: any) => (                 
                  <Typography variant="overline">{word}{ (index == (videoKeyWords.length -1)) ? '' : ','} </Typography>                  
                ))}
                
              </CardContent>
            </Card>
          </Box>
        );
        break;
      
      case 0:
      default:
        
          return (
            <Box sx={{ display: "flex", justifyContent : "center", alignItems : "center", marginTop: 5}}>
              <Box sx={{ width: 800}}> 
                <FilePond                   
                    allowMultiple={false}
                    allowReorder={false}
                    maxFiles={1}
                    server="http://localhost:8000/subtitles"
                    name="file" /* sets the file input name, it's filepond by default */            
                    onprocessfile={handleFileUploaded}
                  />  
                </Box> 
            </Box> 
          ) 
          break;
    }
  };  

  return (
    <>
     <PageHeader text={t('pageSubtitle.header')} />     

     <Stepper alternativeLabel activeStep={activeStep} sx={{ marginTop: 5 }}>
        
        <Step key="upload">
          <StepLabel>File upload</StepLabel>          
        </Step>
        <Step key="process_file">
          <StepLabel >IA Analysis</StepLabel>          
        </Step>
        <Step key="analysis_result">
        <StepLabel>Result</StepLabel>        
        </Step>        
      </Stepper>
      <Box>
        {getStepContent(activeStep)}
      </Box>
      
    </>
  );
};

export default SubtitlePage;
