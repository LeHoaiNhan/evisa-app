import { useState } from 'react'

export default function Step4Payment({ formData, onBack, onSubmit }) {
  const [payMethod, setPayMethod] = useState('card')
  const [card, setCard] = useState({ number: '', expiry: '', cvv: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = () => {
    setSubmitted(true)
    if (onSubmit) onSubmit({ ...formData, payMethod, card })
  }

  if (submitted) {
    return (
      <div className="step-content" style={{textAlign:'center', padding:'48px 24px'}}>
        <div style={{width:72,height:72,background:'var(--green-light)',borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto 20px'}}>
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="2.5">
            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
        </div>
        <h2 style={{fontFamily:'Fraunces,serif',fontSize:28,fontWeight:900,color:'var(--navy)',marginBottom:10}}>Đơn đã nộp thành công!</h2>
        <p style={{color:'var(--gray600)',fontSize:15,lineHeight:1.7,maxWidth:360,margin:'0 auto 24px'}}>
          Chúng tôi đã nhận được đơn visa của bạn. Email xác nhận sẽ được gửi trong vài phút.
        </p>
        <div style={{background:'var(--green-light)',border:'1px solid #bbf7d0',borderRadius:'var(--radius-sm)',padding:'16px 20px',display:'inline-block'}}>
          <div style={{fontSize:13,color:'var(--gray600)'}}>Mã đơn của bạn</div>
          <div style={{fontFamily:'monospace',fontSize:20,fontWeight:700,color:'var(--navy)',marginTop:4}}>EV-{Math.random().toString(36).slice(2,8).toUpperCase()}</div>
        </div>
      </div>
    )
  }

  return (
    <div className="step-content">
      <div className="success-banner">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="2">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
        <div>
          <p style={{fontWeight:700,color:'#15803d',fontSize:14}}>Hồ sơ hợp lệ!</p>
          <p style={{fontSize:13,color:'#16a34a'}}>Sẵn sàng để nộp đơn</p>
        </div>
      </div>

      <div className="section-title">Tóm tắt đơn</div>
      <div className="summary-table">
        <SummaryRow label="Người nộp" value={`${formData.personal?.lastName || ''} ${formData.personal?.firstName || ''}`.trim() || '—'} />
        <SummaryRow label="Điểm đến" value={formData.trip?.destination || 'Thái Lan'} />
        <SummaryRow label="Loại visa" value={formData.trip?.visaType || 'E-Visa du lịch'} />
        <SummaryRow label="Xử lý" value={formData.trip?.processing || 'Thường (5-7 ngày)'} />
        <SummaryRow label="Phí visa chính phủ" value="$30.00" />
        <SummaryRow label="Phí dịch vụ eVisa" value="$19.00" />
        <SummaryRow label="Tổng cộng" value={<span style={{color:'var(--blue)',fontSize:17,fontWeight:800}}>$49.00</span>} isTotal />
      </div>

      <div className="section-title">Phương thức thanh toán</div>
      <div className="pay-methods">
        <label className={`pay-opt ${payMethod==='card'?'selected':''}`}>
          <input type="radio" name="pay" checked={payMethod==='card'} onChange={()=>setPayMethod('card')} />
          💳 Thẻ tín dụng / Ghi nợ
        </label>
        <label className={`pay-opt ${payMethod==='ewallet'?'selected':''}`}>
          <input type="radio" name="pay" checked={payMethod==='ewallet'} onChange={()=>setPayMethod('ewallet')} />
          📱 Ví điện tử / QR
        </label>
      </div>

      {payMethod === 'card' && (
        <div className="form-grid">
          <div className="form-group" style={{gridColumn:'span 2'}}>
            <label>Số thẻ <span className="req">*</span></label>
            <input type="text" placeholder="1234 5678 9012 3456" value={card.number} onChange={e=>setCard({...card,number:e.target.value})} />
          </div>
          <div className="form-group">
            <label>Ngày hết hạn <span className="req">*</span></label>
            <input type="text" placeholder="MM/YY" value={card.expiry} onChange={e=>setCard({...card,expiry:e.target.value})} />
          </div>
          <div className="form-group">
            <label>CVV <span className="req">*</span></label>
            <input type="text" placeholder="123" value={card.cvv} onChange={e=>setCard({...card,cvv:e.target.value})} />
          </div>
        </div>
      )}

      <div className="form-actions">
        <button className="btn-secondary" onClick={onBack}>← Quay lại</button>
        <button className="btn-primary" style={{background:'var(--green)',padding:'13px 28px'}} onClick={handleSubmit}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          Nộp đơn & Thanh toán $49
        </button>
      </div>
    </div>
  )
}

function SummaryRow({ label, value, isTotal }) {
  return (
    <div className={`summary-row ${isTotal?'summary-total':''}`}>
      <span className="summary-label">{label}</span>
      <span className="summary-value">{value}</span>
    </div>
  )
}
