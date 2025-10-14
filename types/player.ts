import type { SpotifyPlaybackState, SpotifyTrack } from './spotify';

interface TempDevice {
	id: string;
	is_active: boolean;
}

interface TempContext {
	uri: string;
}

interface TempPlaybackState {
	item: SpotifyTrack;
	context: TempContext;
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
