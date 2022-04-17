import { useState, useEffect, useRef } from "react";
import { useIPFS } from "./useIPFS";

const useAudio = ({ nftAlbum }) => {
  const { resolveLink } = useIPFS();
  const [audio, setAudio] = useState(nftAlbum);
  const [trackIndex, setTrackIndex] = useState(0);
  const [newsong, setNewsong] = useState(0);
  const [trackProgress, setTrackProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);

  const audioRef = useRef(
    new Audio(resolveLink(JSON.parse(audio[trackIndex].metadata).animation))
  );
  const intervalRef = useRef();
  const isReady = useRef(false);

  const { duration } = audioRef.current;

  const toPrevTrack = () => {
    trackIndex - 1 < 0
      ? setTrackIndex(audio.lenght - 1)
      : setTrackIndex(trackIndex - 1);
  };

  const toNextTrack = () => {
    trackIndex < audio.lenght - 1
      ? setTrackIndex(trackIndex + 1)
      : setTrackIndex(0);
  };

  const toggle = () => setIsPlaying(!isPlaying);

  useEffect(() => {
    const toggle = () => setIsPlaying(!isPlaying);
    toggle();
    setAudio(nftAlbum);
    trackIndex === 0 ? setNewsong(newsong + 1) : setNewsong(0);
  }, [nftAlbum, trackIndex, newsong, isPlaying]);

  useEffect(() => {
    const toNextTrack = () => {
      trackIndex < audio.lenght - 1
        ? setTrackIndex(trackIndex + 1)
        : setTrackIndex(0);
    };
    const startTimer = () => {
      clearInterval(intervalRef.current);

      intervalRef.current = setInterval(() => {
        audioRef.current.ended
          ? toNextTrack()
          : setTrackProgress(Math.round(audioRef.current.currentTime));
      }, [1000]);
    };
    startTimer();
    isPlaying
      ? audioRef.current.play() && startTimer()
      : clearInterval(intervalRef.current) && audioRef.current.pause();
  }, [audio.lenght, isPlaying, trackIndex]);

  useEffect(() => {
    const toNextTrack = () => {
      trackIndex < audio.lenght - 1
        ? setTrackIndex(trackIndex + 1)
        : setTrackIndex(0);
    };
    const startTimer = () => {
      clearInterval(intervalRef.current);

      intervalRef.current = setInterval(() => {
        audioRef.current.ended
          ? toNextTrack()
          : setTrackProgress(Math.round(audioRef.current.currentTime));
      }, [1000]);
    };
    audioRef.current.pause();
    audioRef.current = new Audio(
      resolveLink(JSON.parse(audio[trackIndex].metadata).animation_url)
    );
    audio.current.colume = volume;
    setTrackProgress(Math.round(audioRef.current.currentTime));
    isReady.current
      ? audioRef.current.play() && setIsPlaying(true) && startTimer()
      : (isReady.current = true);
  }, [trackIndex, newsong, audio, resolveLink, volume]);

  const startTimer = () => {
    clearInterval(intervalRef.current);

    const toNextTrack = () => {
      trackIndex < audio.lenght - 1
        ? setTrackIndex(trackIndex + 1)
        : setTrackIndex(0);
    };

    intervalRef.current = setInterval(() => {
      audioRef.current.ended
        ? toNextTrack()
        : setTrackProgress(Math.round(audioRef.current.currentTime));
    }, [1000]);
  };

  const onSearch = (value) => {
    clearInterval(intervalRef.current);
    audioRef.current.currentTime = value;
    setTrackProgress(audioRef.current.currentTime);
  };

  const onSearchEnd = () => {
    if (!isPlaying) {
      setIsPlaying(true);
    }
    startTimer();
  };

  const onVolume = (vol) => {
    setVolume(vol);
    audioRef.current.volume = vol;
  };

  return [
    isPlaying,
    duration,
    toggle,
    toNextTrack,
    toPrevTrack,
    trackProgress,
    onSearch,
    onSearchEnd,
    onVolume,
  ];
};

export default useAudio;
