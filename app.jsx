import React, { useState } from 'react';
import axios from 'axios';

const ReferralApp = ({ userId }) => {
  const [referralLink, setReferralLink] = useState('');
  const [reward, setReward] = useState(0);

  const generateReferralLink = () => {
    const link = `https://t.me/YOUR_BOT_USERNAME?start=${userId}`;
    setReferralLink(link);
  };

  const checkReward = async () => {
    const response = await axios.post('/api/check-reward', { userId });
    setReward(response.data.reward); // Assume the backend returns the reward
  };

  return (
    <div>
      <h1>Refer and Earn Toncoin!</h1>
      <button onClick={generateReferralLink}>Generate Referral Link</button>
      {referralLink && (
        <div>
          <p>Your referral link:</p>
          <input type="text" value={referralLink} readOnly />
        </div>
      )}
      <button onClick={checkReward}>Check Reward</button>
      {reward > 0 && <p>Your current reward: {reward} Toncoin</p>}
    </div>
  );
};

export default ReferralApp;
