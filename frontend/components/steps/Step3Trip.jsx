export default function Step3Trip({ data, onChange, onNext, onBack }) {
  return (
    <div className="step-content">
      <div className="section-title">Chi tiết chuyến đi</div>
      <div className="form-grid">
        <div className="form-group">
          <label>Quốc gia đến <span className="req">*</span></label>
          <select value={data.destination} onChange={e => onChange('destination', e.target.value)}>
            {['Thái Lan','Nhật Bản','Singapore','Indonesia','Mỹ','Anh','Úc'].map(d => <option key={d}>{d}</option>)}
          </select>
        </div>
        <div className="form-group">
          <label>Mục đích <span className="req">*</span></label>
          <select value={data.purpose} onChange={e => onChange('purpose', e.target.value)}>
            <option>Du lịch</option>
            <option>Công tác / Kinh doanh</option>
            <option>Thăm thân</option>
            <option>Học tập</option>
            <option>Chữa bệnh</option>
          </select>
        </div>
        <div className="form-group">
          <label>Ngày nhập cảnh <span className="req">*</span></label>
          <input type="date" value={data.entryDate} onChange={e => onChange('entryDate', e.target.value)} />
        </div>
        <div className="form-group">
          <label>Ngày xuất cảnh <span className="req">*</span></label>
          <input type="date" value={data.exitDate} onChange={e => onChange('exitDate', e.target.value)} />
        </div>
        <div className="form-group">
          <label>Loại visa</label>
          <select value={data.visaType} onChange={e => onChange('visaType', e.target.value)}>
            <option>E-Visa (điện tử)</option>
            <option>Visa on Arrival</option>
            <option>Visa dán</option>
          </select>
        </div>
        <div className="form-group">
          <label>Xử lý nhanh</label>
          <select value={data.processing} onChange={e => onChange('processing', e.target.value)}>
            <option>Thường (5-7 ngày)</option>
            <option>Nhanh (2-3 ngày) +$20</option>
            <option>Siêu nhanh (24h) +$50</option>
          </select>
        </div>
        <div className="form-group" style={{gridColumn:'span 2'}}>
          <label>Địa chỉ lưu trú</label>
          <input type="text" placeholder="Tên khách sạn hoặc địa chỉ" value={data.accommodation} onChange={e => onChange('accommodation', e.target.value)} />
        </div>
        <div className="form-group" style={{gridColumn:'span 2'}}>
          <label>Ghi chú thêm</label>
          <textarea placeholder="Thông tin bổ sung nếu có..." value={data.notes} onChange={e => onChange('notes', e.target.value)} />
        </div>
      </div>

      <div className="form-actions">
        <button className="btn-secondary" onClick={onBack}>← Quay lại</button>
        <button className="btn-primary" onClick={onNext}>
          Xem lại & Thanh toán
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </button>
      </div>
    </div>
  )
}
