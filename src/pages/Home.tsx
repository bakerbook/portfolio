import React from "react"
import { useNavigate } from "react-router-dom"

import SpotifyPlayer from "../components/SpotifyPlayer"

function Home() {
  const navigate = useNavigate()
  return (
    <div className="m-4 min-h-screen flex flex-col">
      <div className="mb-8">
        <p className="mb-2">baker book</p>
        <p>first year student at <span className="font-bold">ucla</span></p>
      </div>
      <div className="mb-8">
        <p>links</p>
        <div className="flex flex-col">
          <a href="https://github.com/bakerbook" target="_blank" rel="noopener noreferrer" className="decoration-dashed cursor-alias">github</a>
          <a href="https://linkedin.com/in/bakerbook" target="_blank" rel="noopener noreferrer" className="decoration-dashed cursor-alias">linkedin</a>
        </div>
      </div>
      <div className="mb-8">
        <p>projects</p>
        <div className="flex flex-col">
          <p onClick={() => navigate("/womble")} className="underline decoration-dashed cursor-pointer">womble</p>
        </div>
      </div>
      <div className="mt-auto mb-8">
        <SpotifyPlayer />
      </div>
    </div>
  )
}

export default Home