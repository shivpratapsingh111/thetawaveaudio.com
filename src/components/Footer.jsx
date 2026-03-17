export default function Footer() {
  return (
    <footer className="py-20 glass border-t border-primary/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <span className="material-symbols-outlined text-primary text-3xl">waves</span>
              <span className="text-2xl font-bold tracking-tight uppercase">
                Theta Wave <span className="text-primary">Audio</span>
              </span>
            </div>
            <p className="text-slate-500 max-w-sm mb-8 leading-relaxed">
              Professional mixing services for rock, hip-hop, and indie artists who want their songs to compete. Based in Nashville, working with artists worldwide.
            </p>
            <div className="flex gap-4">
              <a className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary hover:text-background-dark transition-all" href="https://www.instagram.com/theta_wave_audio" target="_blank" rel="noopener noreferrer">
                <span className="material-symbols-outlined text-xl">photo_camera</span>
              </a>
              <a className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary hover:text-background-dark transition-all" href="https://soundcloud.com/thetawaveaudio" target="_blank" rel="noopener noreferrer">
                <span className="material-symbols-outlined text-xl">cloud</span>
              </a>
              <a className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary hover:text-background-dark transition-all" href="https://www.youtube.com/@thetawaveaudio" target="_blank" rel="noopener noreferrer">
                <span className="material-symbols-outlined text-xl">play_circle</span>
              </a>
            </div>
          </div>
          <div>
            <h6 className="font-bold uppercase text-xs tracking-widest mb-8 text-primary">Quick Nav</h6>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a className="hover:text-primary transition-colors" href="#services">Services</a></li>
              <li><a className="hover:text-primary transition-colors" href="#portfolio">Portfolio</a></li>
              <li><a className="hover:text-primary transition-colors" href="#about">About</a></li>
              <li><a className="hover:text-primary transition-colors" href="#contact">Contact</a></li>
            </ul>
          </div>
          <div>
            <h6 className="font-bold uppercase text-xs tracking-widest mb-8 text-primary">Studio Info</h6>
            <ul className="space-y-4 text-sm text-slate-500">
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-xs">location_on</span> Nashville, TN
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-xs">link</span>
                <a className="hover:text-primary transition-colors" href="https://www.instagram.com/theta_wave_audio" target="_blank" rel="noopener noreferrer">@theta_wave_audio</a>
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-xs">schedule</span> Accepting projects worldwide
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-12 border-t border-white/5 text-xs text-slate-600 font-medium">
          <p>&copy; 2025 Cory Miller. Theta Wave Audio. All rights reserved.</p>
          <div className="flex gap-8">
            <a className="hover:text-slate-400" href="#">Privacy Policy</a>
            <a className="hover:text-slate-400" href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
