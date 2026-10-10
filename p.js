const _0x1a2b = "https://gachi.gay/yHkJTW";
const _0x3c4d = document.createElement('style');
_0x3c4d.innerHTML = `.p_wrap{position:fixed;top:50%;left:50%;transform:translate(-50%,-50%)}.p_wrap * {border-radius:0!important;box-sizing:border-box} .p{display:flex;align-items:center;background:#333;padding:10px 15px;color:#fff;font-family:sans-serif}.p button{background:none;border:none;cursor:pointer;color:#fff;padding:0;margin-right:12px;display:flex}.p svg{width:16px;height:16px;fill:currentColor}.c{position:relative;width:120px;height:4px;background:#555;cursor:pointer;margin-right:12px}.b{position:absolute;height:100%;background:#777;width:0}.t{position:absolute;top:50%;left:0;transform:translate(-50%,-50%);width:12px;height:12px;background:#fff}.m{font-size:12px;color:#ccc;margin-right:15px;white-space:nowrap;user-select:none}.v{display:flex;align-items:center}.vw{position:relative;width:70px;height:4px;background:#555;cursor:pointer;margin-left:8px}.vb{position:absolute;height:100%;background:#fff;width:100%}.vt{position:absolute;top:50%;left:100%;transform:translate(-50%,-50%);width:12px;height:12px;background:#fff}`;
document.head.appendChild(_0x3c4d);

const _0x5e6f = new Audio(_0x1a2b), _0x8f9a = document.createElement('div'), _0x7a8b = document.createElement('div');
_0x8f9a.className = 'p_wrap';
_0x7a8b.className = 'p';
_0x7a8b.innerHTML = `<button><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></button><div class="c"><div class="b"></div><div class="t"></div></div><div class="m"><span>0:00</span> / 0:00</div><div class="v"><button><svg viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg></button><div class="vw"><div class="vb"></div><div class="vt"></div></div></div>`;
_0x8f9a.appendChild(_0x7a8b);
document.body.appendChild(_0x8f9a);

const [_0x9c0d, _0x1e2f, _0x3a4b] = _0x7a8b.querySelectorAll('button'),
[_0x5c6d, _0x7e8f] = _0x7a8b.querySelectorAll('.c, .vw'),
_0x9a0b = _0x7a8b.querySelector('.b'),
_0x1c2d = _0x7a8b.querySelector('.t'),
_0x3e4f = _0x7a8b.querySelector('.vb'),
_0x5a6b = _0x7a8b.querySelector('.vt'),
_0x7c8d = _0x7a8b.querySelector('.m span'),
_0x9e0f = _0x7a8b.querySelector('.m');

const _0x1f2e = _0x3a4b => `${Math.floor(_0x3a4b / 60)}:${Math.floor(_0x3a4b % 60).toString().padStart(2, '0')}`;

_0x5e6f.onloadedmetadata = _0x5e6f.ontimeupdate = () => {
  if (!_0x5e6f.duration) return;
  let _0x3d4c = (_0x5e6f.currentTime / _0x5e6f.duration) * 100;
  _0x9a0b.style.width = _0x1c2d.style.left = `${_0x3d4c}%`;
  _0x7c8d.textContent = _0x1f2e(_0x5e6f.currentTime);
  _0x9e0f.innerHTML = `<span>${_0x7c8d.textContent}</span> / ${_0x1f2e(_0x5e6f.duration)}`;
};

_0x9c0d.onclick = () => {
  _0x5e6f.paused ? _0x5e6f.play() : _0x5e6f.pause();
  _0x9c0d.innerHTML = _0x5e6f.paused 
    ? '<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>' 
    : '<svg viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>';
};

let _0x5b6c = false, _0x7d8e = false;
_0x5c6d.onmousedown = _0x9f0e => { _0x5b6c = true; _0x1b2c(_0x9f0e); };
_0x7e8f.onmousedown = _0x9f0e => { _0x7d8e = true; _0x3d4e(_0x9f0e); };
window.onmousemove = _0x9f0e => {
  if (_0x5b6c) _0x1b2c(_0x9f0e);
  if (_0x7d8e) _0x3d4e(_0x9f0e);
};
window.onmouseup = () => _0x5b6c = _0x7d8e = false;

function _0x1b2c(_0x9f0e) {
  let _0x5f6a = _0x5c6d.getBoundingClientRect(),
      _0x7b8c = Math.max(0, Math.min(1, (_0x9f0e.clientX - _0x5f6a.left) / _0x5f6a.width));
  _0x5e6f.currentTime = _0x7b8c * _0x5e6f.duration;
}

function _0x3d4e(_0x9f0e) {
  let _0x5f6a = _0x7e8f.getBoundingClientRect(),
      _0x7b8c = Math.max(0, Math.min(1, (_0x9f0e.clientX - _0x5f6a.left) / _0x5f6a.width));
  _0x5e6f.volume = _0x7b8c;
  _0x3e4f.style.width = _0x5a6b.style.left = `${_0x7b8c * 100}%`;
}

_0x1e2f.onclick = () => {
  _0x5e6f.muted = !_0x5e6f.muted;
  _0x3e4f.style.width = _0x5a6b.style.left = _0x5e6f.muted ? '0%' : `${_0x5e6f.volume * 100}%`;
};
