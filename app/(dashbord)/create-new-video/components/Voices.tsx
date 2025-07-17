import React, { useState } from 'react'
const voiceOptions = [
  {
    "value": "af_sarah",
    "name": "us Sarah (Female)"
  },
  {
    "value": "af_sky",
    "name": "us Sky (Female)"
  },
  {
    "value": "am_adam",
    "name": "🇺🇸 Adam (Male)"
  },
  {
    "value": "hf_alpha",
    "name": "in Alpha (Female)"
  },
  {
    "value": "am_liam",
    "name": "🇺🇸 Liam (Male)"
  },
  {
    "value": "am_michael",
    "name": "🇺🇸 Michael (Male)"
  },
  {
    "value": "am_onyx",
    "name": "🇺🇸 Onyx (Male)"
  },
  {
    "value": "hf_beta",
    "name": "in Beta (Female)"
  },
  {
    "value": "hm_omega",
    "name": "in Omega (Male)"
  },
  {
    "value": "hm_psi",
    "name": "in Psi (Male)"
  },
  {
    "value": "am_echo",
    "name": "🇺🇸 Echo (Male)"
  },
  {
    "value": "am_eric",
    "name": "🇺🇸 Eric (Male)"
  },
  {
    "value": "am_fenrir",
    "name": "🇺🇸 Fenrir (Male)"
  }
]
const Voices = ({ onHandleInputChange }: { onHandleInputChange: (field: string, value: any) => void }) => {
  const [selectedVoice,setSelectedVoice]=useState<null|string>();
    return (
    <div className='mt-5'>
      <h2>Video Voices</h2>
      <p className='text-sm text-gray-400'>Select voice for your video</p>

      <div className='grid grid-cols-2 gap-3 h-40 overflow-y-auto pr-2'>
        {voiceOptions.map((voice) => (
          <h2
            className={`cursor-pointer p-3 rounded-lg hover:border bg-gray-200 border-purple-200 ${voice.name==selectedVoice && 'border' }`}
            key={voice.name} onClick={()=>{setSelectedVoice(voice.name)
                onHandleInputChange('voice',voice.value)}
            }
          >
            {voice.name}
          </h2>
        ))}
      </div>
    </div>
  );
};

export default Voices;
