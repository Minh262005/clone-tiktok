import React from 'react';
import './SystemRequirementsSection.css';

const SystemRequirementsSection: React.FC = () => (
  <section className="system-req-section">
    <h2>System requirements</h2>
    <div className="system-req-table">
      <div className="system-req-col">
        <h3>Minimum</h3>
        <ul>
          <li><b>CPU</b> Intel® Core™ i3 9th Gen or higher / AMD Ryzen™ 5 3000 Series or higher</li>
          <li><b>GPU</b> NVIDIA GeForce® GTX 10 Series or higher / AMD Radeon™ Graphics</li>
          <li><b>Memory</b> 8GB</li>
          <li><b>Storage space</b> 1GB</li>
          <li><b>DirectX version</b> 11</li>
          <li><b>Camera</b> —</li>
        </ul>
      </div>
      <div className="system-req-col">
        <h3>General LIVE</h3>
        <ul>
          <li><b>CPU</b> Intel® Core™ i5 11th Gen or higher / AMD Ryzen™ 5 6000 Series or higher</li>
          <li><b>GPU</b> NVIDIA GeForce® RTX 20 Series or higher / AMD Radeon™ RX 5000 Series or higher</li>
          <li><b>Memory</b> 16GB</li>
          <li><b>Storage space</b> 1GB</li>
          <li><b>DirectX version</b> 11</li>
          <li><b>Camera</b> 1080p or higher</li>
        </ul>
      </div>
      <div className="system-req-col">
        <h3>Gaming LIVE</h3>
        <ul>
          <li><b>CPU</b> Intel® Core™ i5 11th Gen or higher / AMD Ryzen™ 5 5000 Series or higher</li>
          <li><b>GPU</b> NVIDIA GeForce® RTX 30 Series or higher / AMD Radeon™ RX 6000 Series or higher</li>
          <li><b>Memory</b> 8GB</li>
          <li><b>Storage space</b> 1GB</li>
          <li><b>DirectX version</b> 11</li>
          <li><b>Camera</b> 720p or higher</li>
        </ul>
      </div>
    </div>
  </section>
);

export default SystemRequirementsSection; 