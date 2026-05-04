import { useState } from 'react'
import Step1Personal from './steps/Step1Personal'
import Step2Passport from './steps/Step2Passport'
import Step3Trip from './steps/Step3Trip'
import Step4Payment from './steps/Step4Payment'
import './ApplicationForm.css'

const STEPS = [
  { id: 1, label: 'Cá nhân', icon: '👤' },
  { id: 2, label: 'Hộ chiếu', icon: '📘' },
  { id: 3, label: 'Hành trình', icon: '✈️' },
  { id: 4, label: 'Thanh toán', icon: '💳' },
]

const INITIAL = {
  personal: { lastName:'', firstName:'', gender:'Nam', dob:'', email:'', phone:'', nationality:'Việt Nam', birthPlace:'' },
  passport: { passportNo:'', passportType:'Hộ chiếu phổ thông', issueDate:'', expiryDate:'', issuePlace:'', issueCountry:'Việt Nam' },
  trip: { destination:'Thái Lan', purpose:'Du lịch', entryDate:'', exitDate:'', visaType:'E-Visa (điện tử)', processing:'Thường (5-7 ngày)', accommodation:'', notes:'' },
}

export default function ApplicationForm() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState(INITIAL)

  const updateSection = (section) => (field, value) =>
    setFormData(prev => ({ ...prev, [section]: { ...prev[section], [field]: value } }))

  const next = () => setStep(s => Math.min(s + 1, 4))
  const back = () => setStep(s => Math.max(s - 1, 1))

  const stepTitles = ['Thông tin cá nhân','Thông tin hộ chiếu','Thông tin hành trình','Xác nhận & Thanh toán']
  const stepEmojis = ['👤','📘','✈️','✅']

  return (
    <section className="form-section">
      <div className="container">
        <div className="form-section-header">
          <h2>Đăng ký visa trực tuyến</h2>
          <p>Điền thông tin để bắt đầu quy trình xin visa</p>
        </div>

        {/* STEP TABS */}
        <div className="step-tabs">
          {STEPS.map(s => (
            <div
              key={s.id}
              className={`step-tab ${step === s.id ? 'active' : ''} ${step > s.id ? 'done' : ''}`}
              onClick={() => s.id < step && setStep(s.id)}
            >
              <div className="step-tab-num">
                {step > s.id
                  ? <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 13l4 4L19 7"/></svg>
                  : s.id
                }
              </div>
              <span className="step-tab-label">{s.label}</span>
            </div>
          ))}
        </div>

        {/* FORM CARD */}
        <div className="form-card">
          <div className="form-card-header">
            <h3>{stepEmojis[step-1]} {stepTitles[step-1]}</h3>
            <span className="step-indicator">Bước {step} / 4</span>
          </div>

          {step === 1 && <Step1Personal data={formData.personal} onChange={updateSection('personal')} onNext={next} />}
          {step === 2 && <Step2Passport data={formData.passport} onChange={updateSection('passport')} onNext={next} onBack={back} />}
          {step === 3 && <Step3Trip data={formData.trip} onChange={updateSection('trip')} onNext={next} onBack={back} />}
          {step === 4 && <Step4Payment formData={formData} onBack={back} />}
        </div>
      </div>
    </section>
  )
}
