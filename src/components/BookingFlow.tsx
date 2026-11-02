import React, { useState, useEffect, useMemo } from 'react';
import type { Tour } from '../types';
import { ChevronLeft, Calendar, Users, FileText, CheckCircle2 } from 'lucide-react';

interface Props {
  tours: Tour[];
}

export default function BookingFlow({ tours }: Props) {
  const [step, setStep] = useState(1);
  const [selectedTour, setSelectedTour] = useState<string>('');
  const [date, setDate] = useState('');
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [formData, setFormData] = useState({ name: '', email: '', whatsapp: '' });

  // Read from URL param on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const tourParam = params.get('tour');
    if (tourParam && tours.some(t => t.slug === tourParam)) {
      setSelectedTour(tourParam);
    }
  }, [tours]);

  const activeTour = useMemo(() => tours.find(t => t.slug === selectedTour), [selectedTour, tours]);
  const totalPrice = activeTour ? (activeTour.price * adults) + (activeTour.price * 0.75 * children) : 0; // 75% for children as sample logic

  const handleNext = () => setStep(s => Math.min(s + 1, 6));
  const handlePrev = () => setStep(s => Math.max(s - 1, 1));

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12">
      
      {/* Progress Indicator */}
      <div className="mb-12">
        <div className="flex justify-between text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wide">
          <span className={step >= 1 ? 'text-primary' : ''}>Tour</span>
          <span className={step >= 2 ? 'text-primary' : ''}>Tanggal</span>
          <span className={step >= 3 ? 'text-primary' : ''}>Tamu</span>
          <span className={step >= 4 ? 'text-primary' : ''}>Data</span>
          <span className={step >= 5 ? 'text-primary' : ''}>Review</span>
        </div>
        <div className="flex gap-2">
          {[1,2,3,4,5].map(i => (
            <div key={i} className={`h-1.5 flex-1 rounded-full ${step >= i ? 'bg-primary' : 'bg-gray-200'}`} />
          ))}
        </div>
      </div>

      {/* Steps Content */}
      <div className="bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-gray-100 min-h-[400px] flex flex-col">
        
        {step > 1 && step < 6 && (
          <button onClick={handlePrev} className="flex items-center gap-1 text-sm font-medium text-gray-500 hover:text-primary mb-6 self-start transition-colors">
            <ChevronLeft className="w-4 h-4" /> Kembali
          </button>
        )}

        {/* Step 1: Tour */}
        {step === 1 && (
          <div className="flex-1 animate-in fade-in slide-in-from-right-4 duration-300">
            <h2 className="font-display text-3xl text-primary mb-6">Pilih Paket Tour</h2>
            <div className="grid gap-4">
              {tours.map(t => (
                <label key={t.slug} className={`flex items-start gap-4 p-4 border rounded-2xl cursor-pointer transition-all ${selectedTour === t.slug ? 'border-primary ring-1 ring-primary bg-primary/5' : 'border-gray-200 hover:border-primary/50'}`}>
                  <input type="radio" name="tour" value={t.slug} checked={selectedTour === t.slug} onChange={(e) => setSelectedTour(e.target.value)} className="mt-1 text-primary focus:ring-primary w-4 h-4" />
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900">{t.name}</h3>
                    <p className="text-sm text-gray-500">{t.duration} • {t.destination}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-primary">{t.priceDisplay}</p>
                  </div>
                </label>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Date */}
        {step === 2 && (
          <div className="flex-1 animate-in fade-in slide-in-from-right-4 duration-300">
            <h2 className="font-display text-3xl text-primary mb-6">Kapan Anda akan berangkat?</h2>
            <div className="max-w-sm">
              <label className="block text-sm font-medium text-gray-700 mb-2">Tanggal Keberangkatan</label>
              <div className="relative">
                <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input type="date" value={date} onChange={e => setDate(e.target.value)} min={new Date().toISOString().split('T')[0]} className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent text-gray-700 font-medium" />
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Travelers */}
        {step === 3 && (
          <div className="flex-1 animate-in fade-in slide-in-from-right-4 duration-300">
            <h2 className="font-display text-3xl text-primary mb-6">Jumlah Wisatawan</h2>
            <div className="space-y-6 max-w-sm">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100">
                <div>
                  <p className="font-bold text-gray-900">Dewasa</p>
                  <p className="text-xs text-gray-500">Usia 12+</p>
                </div>
                <div className="flex items-center gap-4">
                  <button onClick={() => setAdults(Math.max(1, adults - 1))} className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:border-primary hover:text-primary disabled:opacity-50" disabled={adults <= 1}>-</button>
                  <span className="font-bold w-4 text-center">{adults}</span>
                  <button onClick={() => setAdults(adults + 1)} className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:border-primary hover:text-primary">+</button>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100">
                <div>
                  <p className="font-bold text-gray-900">Anak-anak</p>
                  <p className="text-xs text-gray-500">Usia 2-11 (75% harga)</p>
                </div>
                <div className="flex items-center gap-4">
                  <button onClick={() => setChildren(Math.max(0, children - 1))} className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:border-primary hover:text-primary disabled:opacity-50" disabled={children <= 0}>-</button>
                  <span className="font-bold w-4 text-center">{children}</span>
                  <button onClick={() => setChildren(children + 1)} className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:border-primary hover:text-primary">+</button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Step 4: Details */}
        {step === 4 && (
          <div className="flex-1 animate-in fade-in slide-in-from-right-4 duration-300">
            <h2 className="font-display text-3xl text-primary mb-6">Detail Kontak Anda</h2>
            <div className="space-y-4 max-w-md">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap</label>
                <input type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} placeholder="Sesuai KTP/Paspor" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} placeholder="Untuk mengirim bukti booking" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nomor WhatsApp</label>
                <input type="tel" value={formData.whatsapp} onChange={e => setFormData({...formData, whatsapp: e.target.value})} placeholder="Contoh: 081234567890" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent" />
              </div>
            </div>
          </div>
        )}

        {/* Step 5: Review */}
        {step === 5 && (
          <div className="flex-1 animate-in fade-in slide-in-from-right-4 duration-300">
            <h2 className="font-display text-3xl text-primary mb-6">Review Pesanan Anda</h2>
            
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 space-y-6">
              <div className="flex items-start gap-4 pb-6 border-b border-gray-200">
                <div className="w-24 h-24 rounded-xl overflow-hidden shrink-0">
                  <img src={activeTour?.heroImage} alt="" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1">{activeTour?.name}</h3>
                  <p className="text-sm text-gray-500 mb-1">{activeTour?.duration} • {activeTour?.destination}</p>
                  <p className="text-sm text-gray-500 font-medium">Berangkat: {date}</p>
                </div>
              </div>

              <div className="pb-6 border-b border-gray-200 space-y-2">
                <h4 className="font-semibold text-gray-900 text-sm uppercase tracking-wider mb-3">Detail Tamu & Kontak</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="block text-gray-500">Jumlah Tamu</span>
                    <span className="font-medium text-gray-900">{adults} Dewasa{children > 0 ? `, ${children} Anak` : ''}</span>
                  </div>
                  <div>
                    <span className="block text-gray-500">Nama</span>
                    <span className="font-medium text-gray-900">{formData.name}</span>
                  </div>
                  <div>
                    <span className="block text-gray-500">Email</span>
                    <span className="font-medium text-gray-900">{formData.email}</span>
                  </div>
                  <div>
                    <span className="block text-gray-500">WhatsApp</span>
                    <span className="font-medium text-gray-900">{formData.whatsapp}</span>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600">Total Biaya</span>
                  <span className="text-2xl font-bold text-primary">Rp{totalPrice.toLocaleString('id-ID')}</span>
                </div>
                <p className="text-xs text-gray-500 text-right">Harga belum termasuk tiket penerbangan</p>
              </div>
            </div>
          </div>
        )}

        {/* Step 6: Confirmation */}
        {step === 6 && (
          <div className="flex-1 flex flex-col items-center justify-center text-center animate-in zoom-in duration-500">
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h2 className="font-display text-4xl text-primary mb-4">Permintaan siap dikirim</h2>
            <p className="text-gray-600 max-w-md mx-auto mb-10 leading-relaxed">
              Terima kasih, <strong>{formData.name}</strong>. Detail booking belum terkirim ke FindPath. Lanjutkan ke WhatsApp dan kirim pesan untuk menanyakan ketersediaan <strong>{activeTour?.name}</strong>.
            </p>
            <div className="space-y-4 w-full max-w-xs">
              <a href={`https://wa.me/6281234567890?text=Halo%20FindPath,%20saya%20sudah%20submit%20booking%20form%20untuk%20${encodeURIComponent(activeTour?.name || '')}.%20Atas%20nama:%20${encodeURIComponent(formData.name)}`} target="_blank" className="block w-full bg-[#25D366] hover:bg-[#20b858] text-white py-4 rounded-xl font-medium transition-all shadow-md hover:shadow-lg">
                Lanjutkan ke WhatsApp
              </a>
              <a href="/" className="block w-full bg-gray-50 hover:bg-gray-100 text-gray-700 py-4 rounded-xl font-medium transition-colors">
                Kembali ke Beranda
              </a>
            </div>
          </div>
        )}

        {/* Bottom Actions */}
        {step < 6 && (
          <div className="mt-10 pt-6 border-t border-gray-100 flex justify-end">
            <button 
              onClick={handleNext} 
              disabled={
                (step === 1 && !selectedTour) || 
                (step === 2 && !date) || 
                (step === 4 && (!formData.name || !formData.email || !formData.whatsapp))
              }
              className="bg-primary hover:bg-secondary disabled:opacity-50 disabled:cursor-not-allowed text-white px-8 py-3.5 rounded-xl font-medium transition-all"
            >
              {step === 5 ? 'Konfirmasi Booking' : 'Lanjutkan'}
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
