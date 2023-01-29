import Head from 'next/head';
import { useState } from 'react'

const Home = () => {
  const [userInput, setUserInput] = useState('')
  const [userActivity, setUserActivity] = useState('')
  const [apiCall, setApiCall] = useState('')
  const [apiOutput, setApiOutput] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)

  const callGenerateEndpoint = async () => {
    setIsGenerating(true);
    console.log(apiCall)
    console.log("Calling OpenAI...")
    const response = await fetch('/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ apiCall }),
    });

    const data = await response.json();
    const { output } = data;
    console.log("OpenAI replied...", output.text)

    
    let activitiesArray = `${output.text}`.split(/\d+\./).slice(1)
    setApiOutput(activitiesArray)
    setIsGenerating(false);
  }

  const onUserChangedText = (event) => {
    setUserInput(event.target.value)
    setApiCall(`${userInput} if you like ${userActivity}`)
  } 

  const onUserChangedActivity = (event) => {
    setUserActivity(event.target.value)
    setApiCall(`${userInput} if you like ${userActivity}`)
  } 

  return (
    <div className="root">
      <Head>
        <title>AI Travel Guide</title>
      </Head>
      <div className="container">
        <div className="header">
          <div className="header-title">
            <h1>Travel GPT</h1>
          </div>
          <div className="header-subtitle">
            <h2>Enter a Location and activity and find some of the most exciting travel ideas</h2>
          </div>
          <div className="prompt-container">
            <input 
              placeholder="Enter Location" 
              className="prompt-box" 
              value={userInput}
              onChange={onUserChangedText}
            />
            <input 
                placeholder="Enter Activity (Optional)" 
                className="prompt-box" 
                value={userActivity}
                onChange={onUserChangedActivity}
              />
          </div>
          <div className="prompt-buttons">
            <a
              className={isGenerating ? 'generate-button loading' : 'generate-button'}
              onClick={callGenerateEndpoint}
            >
              <div className="generate">
              {isGenerating ? <span className="loader"></span> : <p>Generate</p>}
              </div>
            </a>
          </div>
          {apiOutput && (
            <div className="output">
              <div className="output-header-container">
                <h1>Your Activities</h1>
              </div>
              <div className="output-content">
                {apiOutput.map((item) => {
                  let itemData = item.split(":")
                    return (
                      <div className="activity-container">
                        <h2>{itemData[0]}</h2>
                        <p>{itemData[1]}</p>
                      </div>
                    )
                  })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
