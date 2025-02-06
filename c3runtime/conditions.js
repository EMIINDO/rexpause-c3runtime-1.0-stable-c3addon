"use strict";

{
	globalThis.C3.Plugins.Rex_Pause.Cnds =
	{
		OnPause()
		{
			return true;
		},
		OnResume()
		{
			return true;
		},
		IsPause()
		{
			return this.is_pause;
		}
	};
}