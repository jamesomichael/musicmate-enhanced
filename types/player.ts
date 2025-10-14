import type { SpotifyPlaybackState, SpotifyTrack } from './spotify';

interface TempDevice {
	id: string;
	is_active: boolean;
}

interface TempPlaybackState {
	item: SpotifyTrack;
	progress_ms: number;
	is_playing: boolean;
	timestamp: number;
	device: TempDevice;
}

export interface PlayerState {
	deviceId: string | null;
	isReady: boolean;
	playbackState: SpotifyPlaybackState | TempPlaybackState | null;
	isLoading: boolean;
}
