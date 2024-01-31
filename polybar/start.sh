#!/bin/bash
killall polybar
polybar main --config=~/.config/polybar/config.ini &disown
if [[ $(xrandr -q | grep 'HDMI-1-0 connected') ]]; then
	polybar external --config=~/.config/polybar/config.ini &disown
fi


