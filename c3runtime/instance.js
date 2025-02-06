"use strict";

{
	// Porting BY EMI INDO with c3addon-ide-plus
	globalThis.C3.Plugins.Rex_Pause.Instance = class Rex_PauseInstance extends globalThis.ISDKInstanceBase
	{
		constructor()
		{
			super();

            const properties = this._getInitProperties();
			this.is_pause = false;
			this.previous_timescale = 0;
			if (properties)
			{
			}
			const b = this._runtime.Dispatcher();
			this._disposables = new C3.CompositeDisposable(C3.Disposable.From(b, "instancedestroy", (a) => this._OnInstanceDestroyed(a.instance)))
		}
		_release()
		{
			super._release();
		}
		_OnInstanceDestroyed()
		{
			this._toogle_pause(false);
		}
		_toogle_pause(state)
		{
			var cur_state = this.is_pause;
			if (state == cur_state)
				return;
			
			this.is_pause = (!cur_state);
			var trig_method;
			if (this.is_pause)
			{
				this.previous_timescale = this._runtime.GetTimeScale();
				this._runtime.SetTimeScale(0);
				trig_method = globalThis.C3.Plugins.Rex_Pause.Cnds.OnPause;
			}
			else
			{
				this._runtime.SetTimeScale(this.previous_timescale);
				this.previous_timescale = 0;
				trig_method = globalThis.C3.Plugins.Rex_Pause.Cnds.OnResume;
			}
			this._trigger(trig_method);
		};
		_saveToJson()
		{
			return {
				"p": this.is_pause,
				"ts": this.previous_timescale
			};
		}
		_loadFromJson(o)
		{
			this.is_pause = o["p"];
			this.previous_timescale = o["ts"];
		}
	};
}