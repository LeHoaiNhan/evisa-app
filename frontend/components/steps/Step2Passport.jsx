export default function Step2Passport({ data, onChange, onNext, onBack }) {
  return (
    <div className="step-content">
      <div className="section-title">Chi tiết hộ chiếu</div>
      <div className="form-grid">
        <div className="form-group">
          <label>Số hộ chiếu <span className="req">*</span></label>
          <input type="text" placeholder="VD: B1234567" value={data.passportNo} onChange={e => onChange('passportNo', e.target.value)} />
        </div>
        <div className="form-group">
          <label>Loại hộ chiếu <span className="req">*</span></label>
          <select value={data.passportType} onChange={e => onChange('passportType', e.target.value)}>
            <option>Hộ chiếu phổ thông</option>
            <option>Hộ chiếu ngoại giao</option>
            <option>Hộ chiếu công vụ</option>
          </select>
        </div>
        <div className="form-group">
          <label>Ngày cấp <span className="req">*</span></label>
          <input type="date" value={data.issueDate} onChange={e => onChange('issueDate', e.target.value)} />
        </div>
        <div className="form-group">
          <label>Ngày hết hạn <span className="req">*</span></label>
          <input type="date" value={data.expiryDate} onChange={e => onChange('expiryDate', e.target.value)} />
          <span className="hint">Còn hiệu lực ít nhất 6 tháng</span>
        </div>
        <div className="form-group">
          <label>Nơi cấp <span className="req">*</span></label>
          <input type="text" placeholder="Cục Xuất nhập cảnh TP.HCM" value={data.issuePlace} onChange={e => onChange('issuePlace', e.target.value)} />
        </div>
        <div className="form-group">
          <label>Quốc gia cấp <span className="req">*</span></label>
          <select value={data.issueCountry} onChange={e => onChange('issueCountry', e.target.value)}>
            {['Việt Nam','Mỹ','Nhật Bản','Hàn Quốc'].map(c => <option key={c}>{c}</option>)}
          </select>
        </div>
      </div>

      <div className="divider" />
      <div className="section-title">Ảnh hộ chiếu</div>
      <div className="upload-zone">
        <div className="upload-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="2">
            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12"/>
          </svg>
        </div>
        <p>Tải ảnh trang thông tin hộ chiếu</p>
        <span>Ảnh rõ nét, đủ 4 góc · JPG, PNG · Tối đa 5MB</span>
      </div>

      <div className="form-actions">
        <button className="btn-secondary" onClick={onBack}>← Quay lại</button>
        <button className="btn-primary" onClick={onNext}>
          Tiếp theo
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </button>
      </div>
    </div>
  )
}
