"use strict";

{
	globalThis.C3.Plugins.Rex_Pause.Acts =
	{
		TooglePause()
		{
			this._toogle_pause();
		},
		SetState(s)
		{
			var is_pause = (s == 0);
			this._toogle_pause(is_pause);
		}
	};
}